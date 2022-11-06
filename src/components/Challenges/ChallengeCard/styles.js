import { StyleSheet } from "react-native";

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
  
  export default styles;