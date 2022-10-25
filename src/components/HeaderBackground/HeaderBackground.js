import { StyleSheet, View } from "react-native";

export default function BigHeaderBackground({children}) {
    return (
        <View style={styles.ContainerStyles} />
    );
};

const styles = StyleSheet.create({
    ContainerStyles: {
      backgroundColor: '#1658CD',
      elevation: -20,
      height: '236px'
    }
  })