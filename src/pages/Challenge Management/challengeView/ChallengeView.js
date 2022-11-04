import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import PopupContainer from "../../../components/Contaner/PopupContainer";
import ChallengeProgress from "../../../components/Challenges/ChallengeProgress/ChallengeProgress";
import BigHeaderBackground from "../../../components/HeaderBackground/HeaderBackground";
import Todo from "../../../components/Challenges/Todo/Todo";
import { ChallengeConstants } from "../../../util/Constants/ChallengeConstants";
import styles from "./styles";
import { useTranslation } from 'react-i18next'

export default function ChallengeView({ route }) {
  const { t } = useTranslation();
  const { daysLeft, name, completed, tasks, onGoingDate } = route.params;

  // Will change these with API keep this here for now - approve karapn @dulshan
  function getAllowedCigs(cigCount) {
    if (cigCount == 0) {
      return "You are not allowed to smoke today";
    } else if (cigCount == 1) {
      return `You are allowed to smoke only ${cigCount} cigarrate today`;
    } else {
      return `You are allowed to smoke ${cigCount} cigarrates today`;
    }
  }

  const todo = [...tasks.tasks, ...[getAllowedCigs(tasks.noOfCigs)]];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BigHeaderBackground />
        <PopupContainer firstContainer>
          <View>
            <ChallengeProgress
              name={name}
              completed={completed}
              daysLeft={daysLeft}
            />
          </View>
        </PopupContainer>
        <PopupContainer>
          <Todo title={`${t(ChallengeConstants.DAY)} ${onGoingDate}`} todoList={todo} />
        </PopupContainer>
      </ScrollView>
    </SafeAreaView>
  );
}