import { Button, StyleSheet, Text, View } from "react-native";
import Hr from "../HorizontalLine/Hr";

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

const styles = StyleSheet.create({
  titleStyles: {
    marginVertical: 20,
    marginHorizontal: 17,
    fontSize: 18,
    font: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    color: "#434343",
  },
  titleStyles2: {
    marginBottom: 14,
    fontSize: 16,
    font: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    color: "#434343",
  },
  descriptionTextSize: {
    fontSize: 16,
    font: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    color: "#000000",
  },
  todoListContainerStyles: {
    marginVertical: 31,
    marginHorizontal: 36,
  },
  startButtonStyles: {
    marginTop: 37,
  },
});
