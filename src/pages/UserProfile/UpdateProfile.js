import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import BigHeaderBackground from "../../components/HeaderBackground/HeaderBackground.js";
import PopupContainer from "../../components/Contaner/PopupContainer.js";
import { userProfileStyles } from "./UserProfileStyles.js";
import DropDownPicker from 'react-native-dropdown-picker';

const UpdateProfile = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Normal (3 - 5 times per week)', value: 'normal' },
        { label: 'Average (10 - 15 times per week)', value: 'average' },
        { label: 'Extereme (20 - 25 times per week)', value: 'extereme' },
        { label: 'Other', value: 'other' },
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
                            title="Cancel"
                            color="#B6B3B3"
                        >
                        </Button>
                    </View>

                    <View style={userProfileStyles.editbuttonContainer}>
                        <Button
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