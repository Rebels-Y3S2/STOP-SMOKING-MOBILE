import { StyleSheet, View } from "react-native";

export default function PopupContainer({children, firstContainer}) {
    return (
        <View style={firstContainer ? styles.ContainerStylesForFirstContainer : styles.ContainerStyles}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    ContainerStylesForFirstContainer: {
      backgroundColor: '#FFFFFF',
      border: '1px solid #FFFFFF',
      borderRadius: 12,
      elevation: 9,
      marginTop: -220,
      marginHorizontal: 30,
      boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.25)'
    }, 
    ContainerStyles: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #FFFFFF',
        borderRadius: 12,
        elevation: 9,
        marginTop: 37,
        marginHorizontal: 30,
        boxShadow: '0px 1px 20px rgba(0, 0, 0, 0.25)'
      }
  });