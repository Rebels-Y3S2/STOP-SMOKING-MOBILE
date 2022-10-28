import { Image, StyleSheet, Text, View } from "react-native";

export default function DateList({ dateList }) {
  return (
    <View>
      <View style={styles.contentContainer}>
        <Image
          style={styles.imageStyles}
          source={{ uri: 'https://i.ibb.co/q9t7fXV/Vector.png', width: 24, height: 26 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleStyles}>13th October</Text>
          <Text>
            {"\u2B24" + " "}
            {'Drink water'}
          </Text>
          <Text>
            {"\u2B24" + " "}
            {'Drink water'}
          </Text>
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
      backgroundColor: '#FFFFFF',
      flexDirection: "row",
      marginHorizontal: 30,
      paddingVertical: 16,
      paddingHorizontal: 25
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
  