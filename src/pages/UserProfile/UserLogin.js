import React, { useState } from "react";
import BigHeaderBackground from "../../components/HeaderBackground/HeaderBackground.js";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import PopupContainer from "../../components/Contaner/PopupContainer.js";
import { userProfileStyles } from "./UserProfileStyles.js";
import { Image } from 'react-native-elements';
import {userRequests} from '../../api/users.api.js';
import { useNavigation } from '@react-navigation/native'
import UpdateProfile from './UpdateProfile';
import {AuthContext} from '../context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserLogin = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedInUserEmail, setLoggedInUserEmail] = useState('');
    const [loggedInUserName, setLoggedInUserName] = useState('');
    const [loggedInUserSmokingTYpe, setLoggedInUserSmokingTYpe] = useState('');

    const { signIn } = React.useContext(AuthContext);

    const handleEmailAddress = (e) => {
        setEmail(e.nativeEvent.text);
    }

    const handlePassword = (e) => {
        setPassword(e.nativeEvent.text);
    }

    const handleSubmit = () =>{
        const userdetail = {
          email:email,
          password:password,
        }
        userRequests.loginUser(userdetail)
        .then((res) =>{
          console.log(res.data.userData)
          navigation.navigate('TabNavigator');
          setLoggedInUserEmail(res.data.userData.email);
          setLoggedInUserName(res.data.userData.firstName);
          setLoggedInUserSmokingTYpe(res.data.userData.firstName);
        }).catch((error) =>{
          console.log(error)
        })
      }

    const loginHandle =(email, password) => {
        signIn(email, password);
        userRequests.loginUser({email, password})
        .then(async (res) =>{
          console.log(res.data.userData);
          await AsyncStorage.setItem('username', res.data.userData.firstName);
          const nameeeee = await AsyncStorage.getItem('username')
          console.log("Getting data from Asyncstorage");
          console.log(nameeeee);
          console.log();
        }).catch((error) =>{
          console.log(error)
        })
    }

    return (
        <View  style={{marginTop: 40}}>
            <ScrollView>
                <BigHeaderBackground />
                <PopupContainer firstContainer>
                    <TextInput variant="outlined" placeholder='example@gmail.com' style={userProfileStyles.inputContainer} onChange={handleEmailAddress}></TextInput>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Enter your Email Address</Text>

                    <TextInput variant="outlined" placeholder='.........' style={userProfileStyles.inputContainer} secureTextEntry={true} onChange={handlePassword}></TextInput>
                    <Text variant='password' style={userProfileStyles.textLableContainer}>Enter your Password</Text>

                    <Image
                        source={{ uri: "https://www.tcnorth.com/wp-content/uploads/2017/03/iStock-615524918-1080x675.jpg" }}
                        style={userProfileStyles.loginpageImageContainer}
                    />

                    <View style={userProfileStyles.loginbuttonContainer}>
                        <Button
                            title="Login"
                            onPress={() => {loginHandle(email, password)}}
                        >
                        </Button>
                    </View>

                    <View style={userProfileStyles.loginbuttonContainer}>
                        <Button
                            title="Register"
                        >
                        </Button>
                    </View>

                    <Text variant='subtitle 2' style={userProfileStyles.forgotPasswordStyle}>Forgot Password?</Text>

                </PopupContainer>
            </ScrollView>
        </View>
    );
}

export default UserLogin;