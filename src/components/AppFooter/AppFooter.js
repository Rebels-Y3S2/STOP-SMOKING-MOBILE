import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "@react-native-material/core";
import { View } from "react-native";
import { HStack } from "@react-native-material/core";

const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 40,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: '50%'
    }
});

export default function AppFooter() {
    return(
        <HStack m={4} spacing={6}>
            <View style={{ width: 40, height: 40, backgroundColor: "#faf089" }} />
            <View style={{ width: 40, height: 40, backgroundColor: "#ff6347" }} />
            <View style={{ width: 40, height: 40, backgroundColor: "#fed7e2" }} />
        </HStack>
    );
}