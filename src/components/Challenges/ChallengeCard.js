import { Image, StyleSheet, Text, View } from "react-native";

export default function ChallengeCard({ image, title, duration, type }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.imageStyles}
          source={{ uri: image, width: 78, height: 78 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleStyles}>{title}</Text>
          <Text>Duration : {duration}</Text>
          <Text>Type : {type}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginTop: 30,
    padding: 20,
    backgroundColor: "#FFFFFF",
    border: "1px solid #FFFFFF",
    borderRadius: 9,
    boxShadow: "0px 1px 20px rgba(0, 0, 0, 0.25)",
  },
  contentContainer: {
    // flex: 1,
    flexDirection: "row",
  },
  imageStyles: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #FFFFFF",
    borderRadius: 4,
  },
  textContainer: {
    flexDirection: "column",
    marginHorizontal: 20,
  },
  titleStyles: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    weight: 500,
    fontSize: 18,
    lineHeight: 24,
    color: "#000000",
    marginBottom: 9,
  }
});
