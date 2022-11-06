import React, { useState, useContext } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import BigHeaderBackground from "../../components/HeaderBackground/HeaderBackground.js";
import PopupContainer from "../../components/Contaner/PopupContainer.js";
import { userProfileStyles } from "./UserProfileStyles.js";
import { Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { HStack, Provider } from '@react-native-material/core'
import DialogBoxUserDeletion from '../../components/DialogBox/DialogBoxUserDeletion';
import {AuthContext} from '../AuthContext';
import { userRequests } from "../../api/users.api.js";

const ViewProfile = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);

  const {logout, userInfo} = useContext(AuthContext);

  const handleSubmit = (id) => {
    userRequests.deleteUser(id).
    then((res) => {
      console.log(res);
      logout();
    })
  }

  return (
    <View>
      <ScrollView>
        <BigHeaderBackground />
        <PopupContainer firstContainer>
          <HStack ml={240} mt={15} spacing={5}>
            <MaterialIcons name='edit' size={30} onPress={() => navigation.navigate('UpdateProfile')} />
            <MaterialIcons name='delete' size={30} onPress={() => setShow(true)} />
          </HStack>

          <Image
            source={{ uri: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" }}
            style={userProfileStyles.userImageContainer}
          />

          <TextInput variant="outlined" placeholder={userInfo.firstName} style={userProfileStyles.inputContainer} editable={false}></TextInput>
          <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Full Name</Text>

          <TextInput variant="outlined" placeholder={userInfo.email} style={userProfileStyles.inputContainer} editable={false}></TextInput>
          <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Email Address</Text>

          <TextInput variant="outlined" placeholder={userInfo.smokingtype} style={userProfileStyles.inputContainer} editable={false}></TextInput>
          <Text variant='subtitle 2' style={userProfileStyles.textLableContainerLast}>Smoking Pattern</Text>
        </PopupContainer>

        <View style={userProfileStyles.buttonContainer}>
          <Button
            icon={
              <View style={userProfileStyles.iconContainer}>
                <Icon
                  name="power-off"
                  color="white"
                  size={20}
                />
              </View>
            }
            title={<View><Text style={userProfileStyles.buttonTextContent}>Logout</Text></View>}
            onPress = {() => {logout()}}
          />
        </View>
      </ScrollView>
      {
        show &&
        <Provider>
          <DialogBoxUserDeletion
            show={show}
            setShow={setShow}
            title='Delete Profile'
            message='Are you sure to delete your profile'
            handlePress={() => {handleSubmit(userInfo._id)}}
          />
        </Provider>
      }
    </View>
  );
}

export default ViewProfile;