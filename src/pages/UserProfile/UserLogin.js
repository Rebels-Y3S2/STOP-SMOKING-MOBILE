import React, { useState, useContext } from "react";
import BigHeaderBackground from "../../components/HeaderBackground/HeaderBackground.js";
import { View, Text, ScrollView, TextInput, Button } from "react-native";
import PopupContainer from "../../components/Contaner/PopupContainer.js";
import { userProfileStyles } from "./UserProfileStyles.js";
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from '../AuthContext';
import { useTranslation } from 'react-i18next'
import { UserConstants } from "../../util/Constants/UserConstants.js";

const UserLogin = () => {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { t } = useTranslation();

    const {login} = useContext(AuthContext);

    const handleEmailAddress = (e) => {
        setEmail(e.nativeEvent.text);
    }

    const handlePassword = (e) => {
        setPassword(e.nativeEvent.text);
    }

    return (
        <View  style={{marginTop: 40}}>
            <ScrollView>
                <BigHeaderBackground />
                <PopupContainer firstContainer>
                    <TextInput variant="outlined" placeholder={t(UserConstants.PLACEHOLDER_EMAIL)} style={userProfileStyles.inputContainer} onChange={handleEmailAddress}></TextInput>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>{t(UserConstants.ENTER_EMAIL)}</Text>

                    <TextInput variant="outlined" placeholder='.........' style={userProfileStyles.inputContainer} secureTextEntry={true} onChange={handlePassword}></TextInput>
                    <Text variant='password' style={userProfileStyles.textLableContainer}>{t(UserConstants.ENTER_PASSWORD)}</Text>

                    <Image
                        source={{ uri: "https://www.tcnorth.com/wp-content/uploads/2017/03/iStock-615524918-1080x675.jpg" }}
                        style={userProfileStyles.loginpageImageContainer}
                    />

                    <View style={userProfileStyles.loginbuttonContainer}>
                        <Button
                            title={t(UserConstants.LOGIN)}
                            onPress={() => {login(email, password)}}
                        >
                        </Button>
                    </View>

                    <View style={userProfileStyles.loginbuttonContainer}>
                        <Button
                            title={t(UserConstants.REGISTER)}
                            onPress={() => navigation.navigate('UserRegistration')}
                        >
                        </Button>
                    </View>

                    <Text variant='subtitle 2' style={userProfileStyles.forgotPasswordStyle}>{t(UserConstants.FORGOT_PASSWORD)}</Text>

                </PopupContainer>
            </ScrollView>
        </View>
    );
}

export default UserLogin;