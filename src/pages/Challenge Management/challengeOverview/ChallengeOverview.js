import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import PopupContainer from "../../../components/Contaner/PopupContainer";
import BigHeaderBackground from "../../../components/HeaderBackground/HeaderBackground";
import Overview from "../../../components/Challenges/ChallengeOverview/Overview";
import DateList from "../../../components/Challenges/DateList/DateList";
import Hr from "../../../components/HorizontalLine/Hr";
import styles from "./styles";
import { ChallengeConstants } from "../../../util/Constants/ChallengeConstants";
import { getChallenge } from "../../../api/challenge.api";
import { useNavigation } from "@react-navigation/native";
import { CommonConstants } from "../../../util/Constants/CommonConstants";

export default function ChallengeOverview({route}) {
  const challengeId = route.params.id
  const [challenge, setChallenge] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    fetchChallenge()
  }, []);

  function handleOnClick() {
    navigation.navigate(CommonConstants.CHALLENGE_PROGRESS_PATH);
  }

  // function getProgressProps() 
  //   const props;
  //   if (!challenge.isStarted || challenge.startDate) {
  //     props.daysLeft = challenge.duration;
  //     props.tasks = challenge.task[0];
  //   } else {
  //     const new Date(challenge.startDate.split('T')[0]) - new Date(challenge.tasks[0].date.split('T')[0]))/ (1000 * 60 * 60 * 24)
  //   }
  // }

  function getChallengeType(type) {
    let typeVal;
    switch(type) {
      case 0: {
        typeVal = ChallengeConstants.ONCE_A_WEEK;
        break;
      }
      case 1: {
        typeVal = ChallengeConstants.TWO_FIVE_A_WEEK;
        break;
      }
      case 2: {
        typeVal = ChallengeConstants.ONCE_A_DAY;
        break;
      }
      case 3: {
        typeVal = ChallengeConstants.TWO_FIVE_A_DAY;
        break;
      }
      case 4: {
        typeVal = ChallengeConstants.MORE_THAN_FIVE_A_DAY;
        break;
      }
    }
    return typeVal;
  }

  function fetchChallenge() {
    getChallenge(challengeId)
    .then((res) => {
      console.log(res.data.data)
      const { duration, isStarted, name, tasks, type, startDate } = res.data.data
      setChallenge({ duration, isStarted, name, tasks, type, startDate });
    })
    .catch((err) => console.log(err))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BigHeaderBackground />
        <PopupContainer firstContainer>
          <Overview
            title={challenge.name}
            description={
              `This is a ${challenge.duration} days challenge for people who smoke ${getChallengeType(challenge.type)}.`
            } // Will change this string when localization is done. keep this here for now
            isStarted={challenge.isStarted}
            onClick={handleOnClick}
          />
        </PopupContainer>
        <PopupContainer></PopupContainer>
        <Text style={styles.dateListTitleStyles}>
          {ChallengeConstants.DATE_LIST_TITLE}
        </Text>
        { challenge.tasks && challenge.tasks.map((task, index) =>{
            return (
              <View>
                <Hr/>
                <DateList date={task.date} tasks={task.tasks}/>
              </View>
            )
        } )}
      </ScrollView>
    </SafeAreaView>
  );
}

