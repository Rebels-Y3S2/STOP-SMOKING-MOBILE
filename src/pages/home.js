import React, {useEffect, useContext, useState} from "react";
import { View,Text,ScrollView} from "react-native";
import BigHeaderBackground from "../components/HeaderBackground/HeaderBackground.js";
import PopupContainer from "../components/Contaner/PopupContainer.js";
import { homestyles } from "./HomeStyles.js";
import { Image } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import {AuthContext} from './AuthContext';
import { MenuOption, MenuOptions } from "react-native-popup-menu";
import { LocaleContext } from "../localization/LangProvider.js";
import LanguageSelection from "../components/LanuguageSelection/LanguageSelection.js";
import { Provider } from "@react-native-material/core";
import { useTranslation } from 'react-i18next'
import { HomeConstants } from "../util/Constants/HomeConstants.js";

const Home = () => {
  const navigation = useNavigation();
  const {userInfo} = useContext(AuthContext);
  const {setLocale, showLocaleModal, setShowLocaleModal } = useContext(LocaleContext);

  const { t } = useTranslation();

  function handleClose() {
    setShowLocaleModal(false)
  }

  function handleLaunguageSelection(locale) {
    setLocale(locale);
    handleClose()
  } 



  return (
    <View>
      <ScrollView>        

        <BigHeaderBackground/>
        <PopupContainer firstContainer style={homestyles.popupcontainerMargin}>
          <MaterialIcons name='person' size={25} onPress={() => navigation.navigate('ViewProfile')} style={homestyles.profileIcon}/>
          <Text variant='subtitle 2' style={homestyles.welcomephrase}>{t(HomeConstants.HEY)} {userInfo ? userInfo.firstName : 'Stranger'} !</Text>
          <Text variant='subtitle 2' style={homestyles.imageinstruction}>{t(HomeConstants.CLICK_IMAGE)}</Text>
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_lhDKyIPN98vfAYrx1vLeVoIbjXt6N2siWtu4cx3hm0n-YBrvzl25lngvIILvdSElz4&usqp=CAU" }}
            style={homestyles.imagecontainer}
          />
          <Text variant='subtitle 2' style={homestyles.challengename}>{t(HomeConstants.NO_MORE_CIGARETTES)}</Text>
        </PopupContainer>

        <PopupContainer firstContainerstyle={homestyles.popupcontainerMarginSecond}>
          <Image
            source={{ uri: "https://www.lanermc.org/hubfs/stop-smoking-now.993x0-is.jpg" }}
            style={homestyles.stopsmokeImageContainer}
          />
          <Text variant='subtitle 2' style={homestyles.instructionTitle}>{t(HomeConstants.LETS_STOP_SMOKING)}</Text>
          <Text variant='subtitle 2' style={homestyles.pointsContainer}>{t(HomeConstants.SMOKING_CAUSING)}</Text>
          <Text variant='subtitle 2' style={homestyles.pointsContainer}>{t(HomeConstants.SMOKING_ADDICTED)}</Text>
          <Text variant='subtitle 2' style={homestyles.pointsContainerLast}>{t(HomeConstants.SMOKING_THREATENS)}</Text>
        </PopupContainer>
        {showLocaleModal && <Provider><LanguageSelection handleSelection={handleLaunguageSelection} onClose={handleClose} /></Provider>}
      </ScrollView>
    </View>
  );
};

export default Home;
