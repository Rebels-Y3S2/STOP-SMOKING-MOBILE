import { StyleSheet } from "react-native"

export const userProfileStyles = StyleSheet.create({
    inputContainer: {
        height: 50,
        width:'91%',
        margin:'5%',
        backgroundColor:'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    inputContainerUpdateProfile: {
        height: 50,
        width:'91%',
        margin:'5%',
        backgroundColor:'white',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    inputContainerDropDown: {
        height: 50,
        width:'91%',
        margin:'5%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    textLableContainer:{
        marginLeft:'5%',
        marginTop:'-3%',
        fontSize: 12,
        lineHeight: 16,
        font: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'rgba(0, 0, 0, 0.6)'
    },
    userImageContainer: {
        width: 150, 
        height: 150,
        marginLeft: 90,
        marginRight: 90,
        marginTop: 30,
        borderRadius: 150,
        marginBottom: 30,
    },
    textLableContainerLast: {
        marginLeft:'5%',
        marginTop:'-3%',
        fontSize: 12,
        lineHeight: 16,
        font: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        color: 'rgba(0, 0, 0, 0.6)',
        marginBottom: 30
    },
    buttonContainer: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelbuttonContainer: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
    },
    editbuttonContainer: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 40
    },
    iconContainer: {
        marginLeft: 50,
    },
    buttonTextContent: {
        marginLeft: 10,
        fontSize: 18,
        color: "#ffffff",
        marginRight: 50, 
        font: 'Roboto',
    },
    cancelbuttonTextContent: {
        marginLeft: 80,
        fontSize: 18,
        color: "#000000",
        marginRight: 80, 
        font: 'Roboto',
    },
    placeholderStyles: {
        fontSize: 16,
    },
    privacyPolicy: {
        fontSize: 16,
        font: 'Roboto',
        textAlign: 'center',
        color: "#407A9C",
        marginTop: -25
    },
    agreement: {
        fontSize: 14,
        font: 'Roboto',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 40
    },
    quickGuide: {
        marginTop: 10,
        marginLeft: 285,
        color: "#6F6E6E"
    },
    cameraIcon: {
        marginTop: -65,
        marginLeft: 285,
        color: "#6F6E6E",
        marginLeft: 190,
        marginBottom: 30,
    },
    loginpageImageContainer: {
        width: 250, 
        height: 200,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 50,
        borderRadius: 15,
        marginBottom: 60,
    },
    loginbuttonContainer: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10
    },
    forgotPasswordStyle: {
        fontSize: 16,
        font: 'Roboto',
        textAlign: 'center',
        color: "#407A9C",
        marginBottom: 50
    }
})