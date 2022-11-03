import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import PopupContainer from "../../../components/Contaner/PopupContainer";
import BigHeaderBackground from "../../../components/HeaderBackground/HeaderBackground";
import Overview from "../../../components/Challenges/ChallengeOverview/Overview";
import DateList from "../../../components/Challenges/DateList/DateList";
import Hr from "../../../components/HorizontalLine/Hr";
import styles from "./styles";
import { ChallengeConstants } from "../../../util/Constants/ChallengeConstants";

export default function ChallengeOverview({route}) {
  console.log(route)
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
          {ChallengeConstants.DATE_LIST_TITLE}
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

