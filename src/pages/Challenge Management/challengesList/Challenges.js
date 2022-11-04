import { RefreshControl, SafeAreaView, ScrollView } from "react-native";
import ChallengeCard from "../../../components/Challenges/ChallengeCard/ChallengeCard";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { CommonConstants } from "../../../util/Constants/CommonConstants";
import { useCallback, useEffect, useState } from "react";
import { getChallenges } from "../../../api/challenge.api";


// const challenges = [
//   {
//     _id: 1,
//     title: "Title",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg",
//     duration: "60 days",
//     type: "hard",
//   },
//   {
//     _id: 2,
//     title: "Title",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg",
//     duration: "60 days",
//     type: "hard",
//   },
//   {
//     _id: 22,
//     title: "Title",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg",
//     duration: "60 days",
//     type: "hard",
//   },
//   {
//     _id: 3,
//     title: "Title",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg",
//     duration: "60 days",
//     type: "hard",
//   },
//   {
//     _id: 4,
//     title: "Title",
//     image:
//       "https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg",
//     duration: "60 days",
//     type: "hard",
//   },
// ];

export default function Challenges() {
  const navigation = useNavigation()
  const [refreshing, setRefreshing] = useState(false);
  const [challenges, setChallenges] = useState([])

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getChallenges("63632b9d0cae67041458ba21")      
    .then(res => {
      setChallenges(res.data.data);
      setRefreshing(false) 
    })
    .catch(err => {
      console.log(err)
    })
  }, []);
  

  useEffect(() => {
    fetchChallenges();
  },[])

  function fetchChallenges() {
    getChallenges("63632b9d0cae67041458ba21")
      .then(res => {
        setChallenges(res.data.data);
      })
      .catch(err => {
        console.log(err)
      })
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
        {challenges.length > 0 && challenges.map((challenge, id) => (
          <ChallengeCard
            id={challenge._id}
            title={challenge.name}
            image={"https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg"}
            duration={challenge.duration}
            type={challenge.type}
          />
        ))}
      </ScrollView>
      <MaterialIcons name='add-circle' size={60} style={styles.icon}  onPress={() => navigation.navigate(CommonConstants.CREATE_CHALLENGE_PATH)}/>
    </SafeAreaView>
  );
}

