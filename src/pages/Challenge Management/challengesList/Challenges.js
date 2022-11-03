import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import ChallengeCard from "../../../components/Challenges/ChallengeCard";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from "@react-navigation/native";


const challenges = [
  {
    _id: 1,
    title: "Title",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg",
    duration: "60 days",
    type: "hard",
  },
  {
    _id: 2,
    title: "Title",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg",
    duration: "60 days",
    type: "hard",
  },
  {
    _id: 22,
    title: "Title",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg",
    duration: "60 days",
    type: "hard",
  },
  {
    _id: 3,
    title: "Title",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg",
    duration: "60 days",
    type: "hard",
  },
  {
    _id: 4,
    title: "Title",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/698/023/original/the-initial-letter-bb-logo-design-free-vector.jpg",
    duration: "60 days",
    type: "hard",
  },
];

export default function Challenges() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {challenges.map((challenge, id) => (
          <ChallengeCard
            title={challenge.title}
            image={challenge.image}
            duration={challenge.duration}
            type={challenge.type}
          />
        ))}
      </ScrollView>
      <MaterialIcons name='add-circle' size={60} style={styles.icon}  onPress={() => navigation.navigate('CreateChallenge')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
  icon:{
    position: 'absolute',
    left: '80%',
    top: 600,
    color: '#1658CD',
    boxShadow:'-8px 4px 24px rgba(0, 0, 0, 0.25)',
    zIndex: 1000,
},
});
