import React from "react";
import { View, Text, ScrollView, TextInput} from "react-native";
import BigHeaderBackground from "../../components/HeaderBackground/HeaderBackground.js";
import PopupContainer from "../../components/Contaner/PopupContainer.js";
import { userProfileStyles } from "./UserProfileStyles.js";
import { Button, Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ViewProfile = () => {
   return(
    <View>
     <ScrollView>
      <BigHeaderBackground/>
      <PopupContainer firstContainer>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" }}
            style={userProfileStyles.userImageContainer}
          />

          <TextInput variant="outlined" placeholder='John Smith' style={userProfileStyles.inputContainer} editable={false}></TextInput>
          <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Full Name</Text>

          <TextInput variant="outlined" placeholder='johnsmith@gmail.com' style={userProfileStyles.inputContainer} editable={false}></TextInput>
          <Text variant='subtitle 2' style={userProfileStyles.textLableContainer}>Email Address</Text>

          <TextInput variant="outlined" placeholder='Normal (3 - 5 times per week)' style={userProfileStyles.inputContainer} editable={false}></TextInput>
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
        />
        </View>
      </ScrollView>
    </View>
   ); 
}

export default ViewProfile;