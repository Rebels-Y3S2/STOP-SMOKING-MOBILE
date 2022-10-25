import { Button } from '@react-native-material/core';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PopupContainer from '../components/Contaner/PopupContainer';
import ChallengeProgress from '../components/ChallengeProgress/ChallengeProgress';
import BigHeaderBackground from '../components/HeaderBackground/HeaderBackground';

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 40,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '50%'
    }
});

export default function Home({ navigation, route }) {
    return (
        <View>
            <BigHeaderBackground />
            <PopupContainer firstContainer>
                <ChallengeProgress />
            </PopupContainer>
            <PopupContainer>
                <Text style={[styles.sectionTitle]}>This is home and this screen navigated from {route.params.name}</Text>
            </PopupContainer>
            <Button title="CREATE REMINDER" onPress={() => navigation.navigate('CreateReminder')}/>
        </View>
    );
}