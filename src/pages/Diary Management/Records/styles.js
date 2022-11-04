import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        position:"absolute",
        width:'100%',
        height:"100%"
    },
    search1: {
        padding: 10,
        zIndex: 0,
        backgroundColor: "#EEF2F5"
    },
    search2: {
        padding: 10,
        zIndex: 10,
        backgroundColor: "#EEF2F5"
    },
    searchInputContainerStyle: {
        backgroundColor: "white",
        borderRadius: 9
    },
    searchContainerStyle: {
        backgroundColor: 'transparent'
    },
    cardContainer: {
        marginTop: 160,
        zIndex: -9999,
        backgroundColor: "#EEF2F5"
    },
    card: {
        borderRadius: 9,
        zIndex: 999,
    },  
    icon:{
        position: 'absolute',
        left: '80%',
        top: 600,
        color: '#1658CD',
        boxShadow:'-8px 4px 24px rgba(0, 0, 0, 0.25)',
        zIndex: 1000,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 24,
        letterSpacing: 0.15,
        width: 200
    },
    date: {
        fontSize: 13,
        fontWeight: '300',
        lineHeight: 24,
        letterSpacing: 0.15,
        right: 10
    },
    lable:{
        font: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        color: '#000000',
        width: 320,
        fontSize: 15,
        lineHeight: 21,
        letterSpacing: 0.14,
        justifyContent: 'space-between',
    },
    btns: {
        marginTop: 10
    },
    selectedButtonStyle: {
        color: 'white',
        backgroundColor: '#4E75AC'
    },
    tabBtnContainer: {
        borderRadius: 10,
        height: 50
    },
    tabBtnText: {
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0.15
    }, 
});