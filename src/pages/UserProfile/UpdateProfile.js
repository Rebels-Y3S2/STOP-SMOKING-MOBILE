import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import BigHeaderBackground from "../../components/HeaderBackground/HeaderBackground.js";
import PopupContainer from "../../components/Contaner/PopupContainer.js";
import { userProfileStyles } from "./UserProfileStyles.js";
import DropDownPicker from 'react-native-dropdown-picker';

const UpdateProfile = () => {
    const data = [
        { label: 'Normal (3 -5 times per week)', value: '1' },
        { label: 'Average (10 - 15 times per week)', value: '2' },
        { label: 'Extreme (20 -30 times per week)', value: '3' },
        { label: 'Other', value: '4' },
    ];

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (
        <View>
            <ScrollView>
                <BigHeaderBackground />
                <PopupContainer firstContainer>
                    <TextInput variant="outlined" placeholder='John Smith' style={userProfileStyles.inputContainerUpdateProfile}></TextInput>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Full Name</Text>

                    <TextInput variant="outlined" placeholder='johnsmith@gmail.com' style={userProfileStyles.inputContainerUpdateProfile}></TextInput>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Email Address</Text>

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={userProfileStyles.inputContainerUpdateProfile}
                        placeholderStyle={{
                            color: "grey",
                        }}
                    />
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainerLast}>Smoking Pattern</Text>

                    <View style={userProfileStyles.cancelbuttonContainer}>
                        <Button
                            onPress={() => Alert.alert('Button with adjusted color pressed')}
                            title="Cancel"
                            color="#B6B3B3"
                        >
                        </Button>
                    </View>

                    <View style={userProfileStyles.editbuttonContainer}>
                        <Button
                            onPress={() => Alert.alert('Button with adjusted color pressed')}
                            title="Edit"
                        >
                        </Button>
                    </View>

                </PopupContainer>
            </ScrollView>
        </View>
    );
}

export default UpdateProfile;