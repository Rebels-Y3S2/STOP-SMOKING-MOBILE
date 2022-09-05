import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "@react-native-material/core";

const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 40,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: '50%'
    }
});

export default function Test({ navigation }) {
    return(
        <View>
            <Text style={[styles.sectionTitle]}>Stop Smoke App</Text>
            <Button variant="contained" title="Home" onPress={() => navigation.navigate('Home', { name: 'TEST' })}/>
        </View>
    );
}