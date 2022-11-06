import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    icon:{
        position:'absolute',
        top:560,
        left:"80%",
        color: '#1658CD',
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
    },
    reminderWrapper:{
        position:"absolute", 
        width:'100%', 
        height:"100%"
    }
});