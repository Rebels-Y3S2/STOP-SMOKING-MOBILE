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

  const todo = [...tasks.tasks,];

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
          <Todo title={`${t(ChallengeConstants.DAY)} ${onGoingDate}`} todoList={tasks.tasks} />
        </PopupContainer>
      </ScrollView>
    </SafeAreaView>
  );
}