import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    icon:{
        position:'absolute',
        top:600,
        left:"80%",
        color: '#1658CD',
        backgroundColor:'white',
        boxShadow:'-8px 4px 24px rgba(0, 0, 0, 0.25)'
    },
    lable:{
        font: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        color: '#000000'
    },
    message:{
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    }
});