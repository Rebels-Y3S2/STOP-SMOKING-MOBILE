import { Image, StyleSheet, Text, View } from "react-native";
import styles from "./styles";

export default function DateList({ date, tasks }) {
  return (
    <View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.imageStyles}
          source={{ uri: 'https://i.ibb.co/q9t7fXV/Vector.png', width: 24, height: 26 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleStyles}>{date}</Text>
          {tasks.map(task => <Text>{"\u2B24" + " "}{task}</Text>)}
        </View>
      </View>
    </View>
  );
}


  