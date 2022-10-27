import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PopupContainer from '../../components/Contaner/PopupContainer';
import ChallengeProgress from '../../components/ChallengeProgress/ChallengeProgress';
import BigHeaderBackground from '../../components/HeaderBackground/HeaderBackground';

export default function ChallengeView() {
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
                    <Text>Oh ye Challenges</Text>
                </PopupContainer>
            </ScrollView>
        </View>
    );
}