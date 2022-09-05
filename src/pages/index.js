import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 40,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: '50%'
    }
});

export default function Test() {
    return(
        <View>
            <Text style={[styles.sectionTitle]}>Stop Smoke App</Text>
        </View>
    );
}