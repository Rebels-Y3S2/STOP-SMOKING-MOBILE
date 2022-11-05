import React, { useEffect } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { Image } from "react-native";

const Splash = () => {
    const navigation = useNavigation()
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 2000);
    }, []);
    return (
        <View style={styles.center}>
            <Image source={require("../../assets/logo.png")} style={{width: 400, height: 400}} />
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});
export default Splash;