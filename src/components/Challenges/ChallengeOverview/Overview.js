import { Button, StyleSheet, Text, View } from "react-native";
import Hr from "../../HorizontalLine/Hr";
import styles from "./styles";

export default function Overview({ title, description }) {
  return (
    <View>
      <Text style={styles.titleStyles}>{"Challenge Overview"}</Text>
      <Hr />
      <View style={styles.todoListContainerStyles}>
        <Text style={styles.titleStyles2}>{title}</Text>
        <Text style={styles.descriptionTextSize}>{description}</Text>
        <View style={styles.startButtonStyles}>
          <Button color="#1658CD" title="Start" />
        </View>
      </View>
    </View>
  );
}


