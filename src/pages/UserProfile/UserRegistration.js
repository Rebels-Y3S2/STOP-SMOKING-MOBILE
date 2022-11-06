import React, { useState, useEffect } from "react";
import BigHeaderBackground from "../../components/HeaderBackground/HeaderBackground.js";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import PopupContainer from "../../components/Contaner/PopupContainer.js";
import { userProfileStyles } from "./UserProfileStyles.js";
import { Image } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { Provider } from '@react-native-material/core'
import DialogBoxQuickGuide from '../../components/DialogBox/DialogBoxQuickGuide';
import {userRequests} from '../../api/users.api.js';
import DropDown from '../../components/DropDown/DropDown';

const UserRegistration = () => {

    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pic, setPic] = useState('https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg');
    const [smokingtype, setSmokingtype] = useState('');
    
    const [items, setItems] = useState([
        { label: 'Normal (3 - 5 times per week)', value: 'Normal (3 - 5 times per week)' },
        { label: 'Average (10 - 15 times per week)', value: 'Average (10 - 15 times per week)' },
        { label: 'Extereme (20 - 25 times per week)', value: 'Extereme (20 - 25 times per week)' },
        { label: 'Other', value: 'other' },
    ]);

    const handleFirstName = (e) =>{
        setFirstName(e.nativeEvent.text)
    }

    const handleEmailAddress = (e) =>{
        setEmail(e.nativeEvent.text)
    }

    const handlePassword = (e) =>{
        setPassword(e.nativeEvent.text)
    }

    const handleSmokingType = (e) =>{
        setSmokingType(e.nativeEvent.text)
    }

    const handleSubmit = () =>{
        const user = {
          firstName:firstName,
          email:email,
          password:password,
          pic:"https://www.datocms-assets.com/55010/1631448989-1609827493259134-modelo.jpg?auto=format%2Ccompress&cs=srgb",
          smokingtype: smokingtype
        }
        userRequests.addUser(user)
        .then((res) =>{
          console.log(res.data)
          navigation.navigate('Login')
        }).catch((error) =>{
          console.log(error)
        })
      }

      const onUploadImgToCloudinary = (pics) => {
        if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {
          const data = new FormData();
          data.append("file", pics);
          data.append("upload_preset", "trainerfg");
          data.append("cloud_name", "automobile-spare-parts");
          fetch("https://api.cloudinary.com/v1_1/automobile-spare-parts/image/upload", {
            method: "post",
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setPic(data.url.toString());
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          return setPicMessage("Please select jpg,png or jpeg type image");
        }
      };

    return (
        <View style={{marginTop: 40}}>
            <ScrollView>
                <BigHeaderBackground />
                <PopupContainer firstContainer>
                    <MaterialIcons name='info' size={30} onPress={() => setShow(true)} style={userProfileStyles.quickGuide} />

                    <Image
                        source={{ uri: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" }}
                        style={userProfileStyles.userImageContainer}
                    />
                    <View >
                        <MaterialIcons name='camera' size={40} onPress={onUploadImgToCloudinary} style={userProfileStyles.cameraIcon}/>  
                    </View>
                    
                    <TextInput variant="outlined" placeholder='your name' style={userProfileStyles.inputContainer} onChange={handleFirstName}></TextInput>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Enter your Full Name</Text>

                    <TextInput variant="outlined" placeholder='example@gmail.com' style={userProfileStyles.inputContainer} onChange={handleEmailAddress}></TextInput>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Enter your Email Address</Text>

                    <TextInput variant="outlined" placeholder='.........' style={userProfileStyles.inputContainer} secureTextEntry={true}></TextInput>
                    <Text variant='password' style={userProfileStyles.textLableContainer}>Enter your Password</Text>

                    <TextInput variant="outlined" placeholder='.........' style={userProfileStyles.inputContainer} secureTextEntry={true} onChange={handlePassword}></TextInput>
                    <Text variant='password' style={userProfileStyles.textLableContainer}>Confirm your password</Text>

                    <DropDown setValue={setSmokingtype} data={items} disable={true} onChange={handleSmokingType}/>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainerLast}>How often do you smoke?</Text>

                    <View style={userProfileStyles.cancelbuttonContainer}>
                        <Button
                            title="Cancel"
                            color="#B6B3B3"
                            onPress={() => navigation.navigate('Login')}
                        >
                        </Button>
                    </View>

                    <View style={userProfileStyles.editbuttonContainer}>
                        <Button
                            title="Submit"
                            onPress={handleSubmit}
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