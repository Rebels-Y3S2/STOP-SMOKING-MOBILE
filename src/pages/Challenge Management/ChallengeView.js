import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PopupContainer from '../components/Contaner/PopupContainer';
import ChallengeProgress from '../components/ChallengeProgress/ChallengeProgress';
import BigHeaderBackground from '../components/HeaderBackground/HeaderBackground';

export default function ChallengeView({ route }) {
    return (
        <View>
            <ScrollView>
                <BigHeaderBackground />
                <PopupContainer firstContainer>
                    <View>
                        <ChallengeProgress title={'No more cigs'} progress={54} />
                    </View>
                </PopupContainer>
                <PopupContainer>
                    <Text>This is home and this screen navigated from {route.params.name}</Text>
                </PopupContainer>
            </ScrollView>
        </View>
    );
}