import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import PopupContainer from "../../../components/Contaner/PopupContainer";
import BigHeaderBackground from "../../../components/HeaderBackground/HeaderBackground";
import Overview from "../../../components/Challenges/Overview";
import DateList from "../../../components/Challenges/DateList";
import Hr from "../../../components/HorizontalLine/Hr";

export default function ChallengeOverview() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BigHeaderBackground />
        <PopupContainer firstContainer>
          <Overview
            title={"Sample title"}
            description={
              "This is a 90 days challenge for extreme level of smokers."
            }
          />
        </PopupContainer>
        <PopupContainer></PopupContainer>
        <Text style={styles.dateListTitleStyles}>
          These are the challnges you will have to do
        </Text>
        <DateList />
        <Hr />
        <DateList />
        <Hr />
        <DateList />
        <Hr />
        <DateList />
        <Hr />
        <DateList />
        <Hr />
        <DateList />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  dateListTitleStyles: {
    marginHorizontal: 30,
    marginBottom: 10,
    fontSize: 16,
  },
});
