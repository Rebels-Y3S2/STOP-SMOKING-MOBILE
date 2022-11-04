import { HStack, Provider, Text } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { createRef, useState } from 'react'
import { View, Pressable   } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Card from '../../../components/Card/Card'
import DialogBox from '../../../components/DialogBox/DialogBox'
import { styles } from './styles'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import moment from 'moment';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler'
import { ButtonGroup } from 'react-native-elements'
import useMap from '../../../hooks/useMap'

export default function DiaryRecords() {
  const input = createRef();
  const navigation = useNavigation()
  const [show, setShow] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [likeMap, { set }] = useMap([[]]);

  const [recordResponseList, setRecordResponseList] = useState([
    {    
        _id:1,
        title:'I did not smoke',
        description:'Stop smoke is a such good app. Today I did not smoke at all. Now a days I am following the challenges properly. Today is a stress free day for me. Evening meditation gave me a relaxed mind.',
        isFavorite: 0,
        userId:'123',
        createdAt: '2022-10-28'
    },
    {    
        _id:2,
        title:'Record 02',
        description:'Description ddd ssksk snnns sss',
        isFavorite: 1,
        userId:'123',
        createdAt: '2022-10-27'
    },
    {    
        _id:3,
        title:'Record 03',
        description:'Description',
        isFavorite: 0,
        userId:'123',
        createdAt: '2022-10-26'
    },
    {    
        _id:4,
        title:'Record 04',
        description:'Description',
        isFavorite: 0,
        userId:'123',
        createdAt: '2022-10-25'
    },
    {    
        _id:5,
        title:'Record 03',
        description:'Description',
        isFavorite: 0,
        userId:'123',
        createdAt: '2022-10-26'
    },
    {    
        _id:6,
        title:'Record 04',
        description:'Description',
        isFavorite: 0,
        userId:'123',
        createdAt: '2022-10-25'
    },
    {    
        _id:7,
        title:'Record 03',
        description:'Description',
        isFavorite: 0,
        userId:'123',
        createdAt: '2022-10-26'
    },
    {    
        _id:8,
        title:'Record 04',
        description:'Description',
        isFavorite: 0,
        userId:'123',
        createdAt: '2022-10-25'
    },
  ])

  const [search, setSearch] = useState("");

const getLike = (index) => {
    if (likeMap.has(index)) {
        return likeMap.get(index); 
    } else {
        return false;
    }
} 

const handleLike = (index, value) => {
    set(index, value);
}

const updateSearch = (search) => {
  setSearch(search);
};

const tabBtn1 = () => {
    return (
        <HStack m={2} spacing={5}>
            <MaterialIcons name='assignment'size={20} color={selectedIndex === 1 ? "black" : "white"}/>
            <Text color={selectedIndex === 1 ? "black" : "white"} style={styles.tabBtnText}>Records</Text>
        </HStack>
    )
}

const tabBtn2 = () => {
    return (
        <HStack m={2} spacing={5}>
            <MaterialCommunityIcons name='heart'size={20} color={selectedIndex === 0 ? "black" : "white"}/>
            <Text color={selectedIndex === 0 ? "black" : "white"} style={styles.tabBtnText}>Favorites</Text>
        </HStack>
    )
}

const buttons = [{ element: tabBtn1 }, { element: tabBtn2 }]

  return (
    <View style={styles.scrollView}>
        <View style={styles.search}>
        <ButtonGroup
            buttons={buttons}
            selectedIndex={selectedIndex}
            onPress={(value) => {
                setSelectedIndex(value);
                console.log(value);
            }}
            containerStyle={styles.tabBtnContainer}
            selectedButtonStyle={styles.selectedButtonStyle}
            TouchableComponent={true}
        />
            <SearchBar
                placeholder="Search here..."
                onChangeText={updateSearch}
                value={search}
                ref={input}
                containerStyle={styles.searchContainerStyle}
                inputContainerStyle={styles.searchInputContainerStyle}
                platform={'ios' || 'android'}
            />
        </View>
        <ScrollView style={styles.scrollView}>
            <View style={styles.cardContainer}>
      {recordResponseList.map((row, index) => (
          <View key={row._id}>
            <Card 
                style={styles.card}
                title={
                    <HStack m={0} spacing={100} >
                        <Text style={styles.title}>{row.title}</Text>
                        <Text style={styles.date}>
                            {moment().format() === moment(row.createdAt).format() ? 'Today' : moment(row.createdAt).format('M/D')}
                        </Text>
                    </HStack>}
                children={
              <>
                <View>
                  <HStack m={0} spacing={1} >
                    <Text style={styles.lable}>{row.description}</Text>
                  </HStack>
                  <HStack m={0} spacing={240} style={styles.btns}>
                    <View>
                        <Pressable key={index} onPress={(e) => handleLike(index, !getLike(index))} value={row.isFavorite}>
                            <MaterialCommunityIcons
                                name={getLike(index) ? 'heart' : 'heart-outline'}
                                size={28}
                                color={getLike(index) ? '#759CFF' : '#759CFF'}
                            />
                        </Pressable>
                    </View>
                    <View>
                        <HStack m={2} spacing={5}>
                            <MaterialIcons name='edit'size={28} onPress={() => navigation.navigate('UpdateReminder')}  />
                            <MaterialCommunityIcons name='delete-outline'size={28} onPress={()=> setShow(true)}  />
                        </HStack>
                    </View>
                  </HStack>
                </View>
              </>
            }
          />
          </View>
        ))
      }
      </View>
      </ScrollView>
      <MaterialIcons name='add-circle' size={60} style={styles.icon}  onPress={() => navigation.navigate('CreateReminder')}/>
          {
            show &&
            <Provider>
            <DialogBox 
              show={show} 
              setShow={setShow}
              title='Delete Reminder'
              message='Are you sure to delete the reminder'
            />
            </Provider>
          }
    </View>
  );
}


