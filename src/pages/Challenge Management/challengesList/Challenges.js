import { RefreshControl, SafeAreaView, ScrollView, Text, View } from "react-native";
import ChallengeCard from "../../../components/Challenges/ChallengeCard/ChallengeCard";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { CommonConstants } from "../../../util/Constants/CommonConstants";
import { useCallback, useContext, useEffect, useState } from "react";
import { getChallenges } from "../../../api/challenge.api";
import { ChallengeConstants } from "../../../util/Constants/ChallengeConstants";
import { useTranslation } from 'react-i18next'
import { AuthContext } from "../../AuthContext";

export default function Challenges({ route }) {
  const navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(false);
  const [challenges, setChallenges] = useState([]);
  const { t } = useTranslation();
  const userDetails = useContext(AuthContext);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getChallenges(userDetails.userInfo._id)      
    .then(res => {
      setChallenges(res.data.data);
      setRefreshing(false) 
    })
    .catch(err => {
      console.log(err)
    })
  }, []);
  
  if (route?.params?.refresh) {
    fetchChallenges();
  }

  useEffect(() => {
    fetchChallenges();
  },[])

  function getType(duration) {
    if (duration === 60) {
      return t(ChallengeConstants.EASY)
    } else {
      return t(ChallengeConstants.HARD)
    }
  }

  function fetchChallenges() {
    if (!userDetails?.isLoading) {
      getChallenges(userDetails.userInfo._id)
      .then(res => {
        setChallenges(res.data.data);
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}         
      refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        {challenges && challenges.length > 0 && challenges.map((challenge, id) => (
          <ChallengeCard
            id={challenge._id}
            title={challenge.name}
            image={"https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg"}
            duration={challenge.duration}
            type={getType(challenge.duration)}
          />
        ))}
      </ScrollView>

      {challenges && challenges.length <= 3 &&
      <View style={styles.middleTextContainer}>
        <Text style={styles.middleText}>{t(CommonConstants.CREATE_PLUS_BUTTON)}</Text>
        <Text style={styles.middleText}>{t(CommonConstants.YOUR_CUSTOMIZED_CHALLENGE)}</Text>
      </View>}
   
      <MaterialIcons name='add-circle' size={60} style={styles.icon}  onPress={() => navigation.navigate(CommonConstants.CREATE_CHALLENGE_PATH)}/>
    </SafeAreaView>
  );
}

