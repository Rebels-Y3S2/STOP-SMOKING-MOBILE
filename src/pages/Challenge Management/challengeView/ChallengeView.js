import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import PopupContainer from "../../../components/Contaner/PopupContainer";
import ChallengeProgress from "../../../components/Challenges/ChallengeProgress/ChallengeProgress";
import BigHeaderBackground from "../../../components/HeaderBackground/HeaderBackground";
import Todo from "../../../components/Challenges/Todo/Todo";

const todo = ["Dont smoke", "Drink water", "eat well"];

export default function ChallengeView() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BigHeaderBackground />
        <PopupContainer firstContainer>
          <View>
            <ChallengeProgress title={"No more cigs"} progress={54} />
          </View>
        </PopupContainer>
        <PopupContainer>
          <Todo title={"Today's challenge"} todoList={todo} />
        </PopupContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
});
