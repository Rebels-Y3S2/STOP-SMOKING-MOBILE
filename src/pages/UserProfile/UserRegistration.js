import React, { useState } from "react";
import BigHeaderBackground from "../../components/HeaderBackground/HeaderBackground.js";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import PopupContainer from "../../components/Contaner/PopupContainer.js";
import { userProfileStyles } from "./UserProfileStyles.js";
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { HStack, Provider } from '@react-native-material/core'
import DialogBoxQuickGuide from '../../components/DialogBox/DialogBoxQuickGuide';
import DropDownPicker from 'react-native-dropdown-picker';

const UserRegistration = () => {

    const navigation = useNavigation();
    const [show, setShow] = useState(false);

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
                    <MaterialIcons name='info' size={30} onPress={() => setShow(true)} style={userProfileStyles.quickGuide} />

                    <Image
                        source={{ uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" }}
                        style={userProfileStyles.userImageContainer}
                    />

                    <TextInput variant="outlined" placeholder='your name' style={userProfileStyles.inputContainer}></TextInput>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Enter your Full Name</Text>

                    <TextInput variant="outlined" placeholder='example@gmail.com' style={userProfileStyles.inputContainer}></TextInput>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Enter your Email Address</Text>

                    <TextInput variant="outlined" placeholder='.........' style={userProfileStyles.inputContainer} secureTextEntry={true}></TextInput>
                    <Text variant='password' style={userProfileStyles.textLableContainer}>Enter your Password</Text>

                    <TextInput variant="outlined" placeholder='.........' style={userProfileStyles.inputContainer} secureTextEntry={true}></TextInput>
                    <Text variant='password' style={userProfileStyles.textLableContainer}>Confirm your password</Text>

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
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainerLast}>How often do you smoke?</Text>

                    <View style={userProfileStyles.cancelbuttonContainer}>
                        <Button
                            title="Cancel"
                            color="#B6B3B3"
                        >
                        </Button>
                    </View>

                    <View style={userProfileStyles.editbuttonContainer}>
                        <Button
                            title="Save"
                        >
                        </Button>
                    </View>

                    <Text variant='subtitle 2' style={userProfileStyles.privacyPolicy}>Click here to see the Privacy Policy</Text>
                    <Text variant='subtitle 2' style={userProfileStyles.agreement}>By Clicking on Submit, you agree to our terms and conditions</Text>
                </PopupContainer>
            </ScrollView>
            {
                show &&
                <Provider>
                    <DialogBoxQuickGuide
                        show={show}
                        setShow={setShow}
                        title='Quick Guide'
                        message='This app will help the user to stop smoking, by providing some challenges.
                        User needs to register into the app by providing some details, to use the app.     
                        User can Login to the application using email address and password.'
                    />
                </Provider>
            }
        </View>
    );
}

export default UserRegistration;