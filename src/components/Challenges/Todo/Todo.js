import { StyleSheet, Text, View } from "react-native";
import Hr from "../../HorizontalLine/Hr";
import styles from "./styles";

export default function Todo({ title, todoList }) {
  return (
    <View>
      <Text style={styles.titleStyles}>Oh ye Challenges</Text>
      <Hr />
      <View style={styles.todoListContainerStyles}>
        {todoList.map((item, index) => (
          <Text style={styles.todoStyles}>
            {"\u2B24" + " "}
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

