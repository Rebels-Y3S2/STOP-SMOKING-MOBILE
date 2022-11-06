import React, { useState, useContext, useEffect } from "react";
import { View, Text, ScrollView, TextInput, Button, RefreshControl } from "react-native";
import BigHeaderBackground from "../../components/HeaderBackground/HeaderBackground.js";
import PopupContainer from "../../components/Contaner/PopupContainer.js";
import { userProfileStyles } from "./UserProfileStyles.js";
import {AuthContext} from '../AuthContext';
import { userRequests } from "../../api/users.api.js";
import { useNavigation } from '@react-navigation/native'
import DropDown from '../../components/DropDown/DropDown';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const UpdateProfile = () => {
    const navigation = useNavigation();
    const {userInfo} = useContext(AuthContext);
    const [refreshing, setRefreshing] = React.useState(false);

    const [email, setEmail] = useState(userInfo.email);
    const [firstName, setFirstName] = useState(userInfo.firstName);
    const [smokingType, setSmokingType] = useState(userInfo.smokingtype);
    
    const [items, setItems] = useState([
        { label: 'Normal (3 - 5 times per week)', value: 'Normal (3 - 5 times per week)' },
        { label: 'Average (10 - 15 times per week)', value: 'Average (10 - 15 times per week)' },
        { label: 'Extereme (20 - 25 times per week)', value: 'Extereme (20 - 25 times per week)' },
        { label: 'Other', value: 'other' },
    ]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);

    const handleFirstName = (e) =>{
        setFirstName(e.nativeEvent.text)
    }

    const handleEmailAddress = (e) =>{
        setEmail(e.nativeEvent.text)
    }

    const handleSmokingType = (e) =>{
        setSmokingType(e.nativeEvent.text)
    }
    
    const handleSubmit = () => {
        const user = {
          firstName:firstName,
          email:email,
          smokingtype: smokingType
        }
        userRequests.updateUser(userInfo._id, user)
        .then((res) =>{
          console.log(res.data)
          navigation.navigate('ViewProfile')
        }).catch((error) =>{
          console.log(error)
        })
    }

    return (
        <View>
            <ScrollView
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            >
                <BigHeaderBackground />
                <PopupContainer firstContainer>
                    <TextInput variant="outlined" placeholder={userInfo.firstName} style={userProfileStyles.inputContainerUpdateProfile} onChange={handleFirstName}></TextInput>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Full Name</Text>

                    <TextInput variant="outlined" placeholder={userInfo.email} style={userProfileStyles.inputContainerUpdateProfile} onChange={handleEmailAddress}></TextInput>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Email Address</Text>

                    <DropDown setValue={setSmokingType} data={items} disable={true} onChange={handleSmokingType}/>
                    <Text variant='subtitle 2' style={userProfileStyles.textLableContainerLast}>Smoking Pattern</Text>

                    <View style={userProfileStyles.cancelbuttonContainer}>
                        <Button
                            title="Cancel"
                            color="#B6B3B3"
                            onPress={() => {navigation.navigate('ViewProfile')}}
                        >
                        </Button>
                    </View>

                    <View style={userProfileStyles.editbuttonContainer}>
                        <Button
                            title="Edit"
                            onPress={() => handleSubmit()}
                        >
                        </Button>
                    </View>

                </PopupContainer>
            </ScrollView>
        </View>
    );
}

export default UpdateProfile;