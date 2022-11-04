import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    closeIcon: {
        marginLeft: '30%',
        marginTop: 20,
    },
    textLable:{
        marginLeft: -13,
        marginTop:'2%',
        fontSize: 12,
        lineHeight: 16,
        font: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'rgba(0, 0, 0, 0.6)'
    },
    title: {
        height: 50,
        width: 255,
        marginTop:'15%',
        backgroundColor:'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginLeft: -13,
    },
    des: {
        height: 100,
        width: 255,
        marginTop:'10%',
        backgroundColor:'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginLeft: -13,
    },
    cancelBtn: {
        width: 250,
        margin: 15,
    },
    saveBtn: {
        backgroundColor: '#1658CD',
        width: 250,
        margin: 15,
        marginTop: -10,
        marginBottom: 50
    },
    saveText: {
        fontSize: 18,
        color: 'white'
    },
    cancelText: {
        fontSize: 18,
        color: 'black'
    },
});