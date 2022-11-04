import React, { useEffect, useMemo, useState } from "react";
import { View, SafeAreaView, ScrollView, Text } from "react-native";
import PopupContainer from "../../../components/Contaner/PopupContainer";
import BigHeaderBackground from "../../../components/HeaderBackground/HeaderBackground";
import Overview from "../../../components/Challenges/ChallengeOverview/Overview";
import DateList from "../../../components/Challenges/DateList/DateList";
import Hr from "../../../components/HorizontalLine/Hr";
import styles from "./styles";
import { ChallengeConstants } from "../../../util/Constants/ChallengeConstants";
import { deleteChallenge, getChallenge, startChallenge } from "../../../api/challenge.api";
import { useNavigation } from "@react-navigation/native";
import { CommonConstants } from "../../../util/Constants/CommonConstants";
import { Provider } from "@react-native-material/core";
import DialogBox from "../../../components/DialogBox/DialogBox";

export default function ChallengeOverview({ route }) {
  const challengeId = route.params.id;
  const [challenge, setChallenge] = useState({});
  const navigation = useNavigation();
  const progressProps = useMemo(() => getProgressProps(), [challenge]);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    fetchChallenge();
  }, [challengeId]);

  function getProgressProps() {
    const props = {};
    if (challenge.name) {
      if (!challenge.isStarted) {
        props.daysLeft = challenge.duration;
        props.tasks = challenge.tasks[0];
        props.completed = 0;
        props.onGoingDate = 1;
      } else {
        const onGoingDate =
          (new Date(challenge.startDate.split("T")[0]) -
            new Date(challenge.tasks[0].date.split("T")[0])) /
          (1000 * 60 * 60 * 24);
        const daysLeft = challenge.duration - onGoingDate;
        props.daysLeft = daysLeft;
        props.completed = (challenge.duration - daysLeft) / 100;
        props.tasks = challenge.tasks[onGoingDate];
        props.onGoingDate = onGoingDate + 1;
      }
      props.name = challenge.name;
    }
    return props;
  }

  function handleOnClick() {
    if (!challenge.isStarted) {
      startChallenge(challengeId)
        .then((res) => {
          navigation.navigate(
            CommonConstants.CHALLENGE_PROGRESS_PATH,
            progressProps
          );
        })
        .then((err) => {
          console.log(err);
        });
    } else {
      navigation.navigate(
        CommonConstants.CHALLENGE_PROGRESS_PATH,
        progressProps
      );
    }
  }

  function getChallengeType(type) {
    let typeVal;
    switch (type) {
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

  function handleDeleteChallenge() {
    deleteChallenge(challengeId)
      .then(res => {
        console.log(res);
        navigation.navigate(CommonConstants.CHALLENGES_SCREEN_PATH);
      })
      .catch(err => {
        console.log(err)
      })
  }

  function fetchChallenge() {
    getChallenge(challengeId)
      .then((res) => {
        const { duration, isStarted, name, tasks, type, startDate } =
          res.data.data;
        setChallenge({ duration, isStarted, name, tasks, type, startDate });
      })
      .catch((err) => console.log(err));
  }

  function handleEditChallenge() {
    navigation.navigate(CommonConstants.CHALLENGE_EDIT_PATH, {id: challengeId});
  } 

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BigHeaderBackground />
        <PopupContainer firstContainer>
          <Overview
            title={challenge.name}
            description={`This is a ${
              challenge.duration
            } days challenge for people who smoke ${getChallengeType(
              challenge.type
            )}.`} // Will change this string when localization is done. keep this here for now
            isStarted={challenge.isStarted}
            onClick={handleOnClick}
            onDelete={() => setShowDelete(true)}
            onEdit={handleEditChallenge}
          />
        </PopupContainer>
        <PopupContainer></PopupContainer>
        <Text style={styles.dateListTitleStyles}>
          {ChallengeConstants.DATE_LIST_TITLE}
        </Text>
        {challenge.tasks &&
          challenge.tasks.map((task, index) => {
            return (
              <View>
                <Hr />
                <DateList date={task.date} tasks={task.tasks} />
              </View>
            );
          })}
      </ScrollView>
      {showDelete && (
        <Provider>
          <DialogBox
            handleAction={handleDeleteChallenge}
            show={showDelete}
            setShow={setShowDelete}
            title={ChallengeConstants.DELETE_CHALLENGE}
            message={ChallengeConstants.DELETE_CHALLENGE_CONFIRM}
          />
        </Provider>
      )}
    </SafeAreaView>
  );
}
