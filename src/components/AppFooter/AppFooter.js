import React from 'react';
import { View, Text } from 'react-native';
import { HStack } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { styles } from './AppFooterStyles';

export default function AppFooter() {
    const navigation = useNavigation();
    return(
        <HStack m={4} spacing={70} style={{padding:10}}>
            <View>
                <MaterialIcons name='home' style={styles.icon} size={40}/>
                <Text style={styles.iconLable} >Home</Text>
            </View>
            <View>
                <MaterialIcons name='tour' size={40} style={styles.icon}/>
                <Text style={styles.iconLable}>Challenges</Text>
            </View>
            <View>
                <MaterialIcons name='alarm' size={40} style={styles.icon}  onPress={() => navigation.navigate('Reminders')}/>
                <Text style={styles.iconLable}  o>Reminders</Text>
            </View>
            <View>
                <MaterialIcons name='assignment' style={styles.icon} size={40}/>
                <Text style={styles.iconLable}>Diary</Text>
            </View>
        </HStack>
    );
}