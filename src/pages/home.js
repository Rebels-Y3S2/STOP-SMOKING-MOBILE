import React, {useEffect, useContext} from "react";
import { View,Text,ScrollView} from "react-native";
import BigHeaderBackground from "../components/HeaderBackground/HeaderBackground.js";
import PopupContainer from "../components/Contaner/PopupContainer.js";
import { homestyles } from "./HomeStyles.js";
import { Image } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from './AuthContext';

const Home = () => {
  const navigation = useNavigation();
  
  const {userInfo} = useContext(AuthContext);

  return (
    <View>
      <ScrollView>
        <BigHeaderBackground/>
        <PopupContainer firstContainer style={homestyles.popupcontainerMargin}>
          <MaterialIcons name='person' size={25} onPress={() => navigation.navigate('ViewProfile')} style={homestyles.profileIcon}/>
          <Text variant='subtitle 2' style={homestyles.welcomephrase}>Hey {userInfo.firstName} !</Text>
          <Text variant='subtitle 2' style={homestyles.imageinstruction}>Click the image to navigate to your challenge</Text>
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_lhDKyIPN98vfAYrx1vLeVoIbjXt6N2siWtu4cx3hm0n-YBrvzl25lngvIILvdSElz4&usqp=CAU" }}
            style={homestyles.imagecontainer}
          />
          <Text variant='subtitle 2' style={homestyles.challengename}>No more cigarettes</Text>
        </PopupContainer>

        <PopupContainer firstContainerstyle={homestyles.popupcontainerMarginSecond}>
          <Image
            source={{ uri: "https://www.lanermc.org/hubfs/stop-smoking-now.993x0-is.jpg" }}
            style={homestyles.stopsmokeImageContainer}
          />
          <Text variant='subtitle 2' style={homestyles.instructionTitle}>Let's stop smoking...</Text>
          <Text variant='subtitle 2' style={homestyles.pointsContainer}>Smoking causing nearly 8 million deaths in 2022.</Text>
          <Text variant='subtitle 2' style={homestyles.pointsContainer}>90% of new smokers become addicted by age 25</Text>
          <Text variant='subtitle 2' style={homestyles.pointsContainerLast}>Smoking is a major risk factor that threatens the health of people worldwide</Text>
        </PopupContainer>
      </ScrollView>
    </View>
  );
};

export default Home;
