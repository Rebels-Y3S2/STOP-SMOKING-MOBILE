import { HStack, Provider, Text } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { createRef, useState } from 'react'
import { View, Pressable, TextInput   } from 'react-native'
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
import CheckBox from 'expo-checkbox';
import { addDiary, editDiaryRecordById, fetchAllRecMock, fetchDiaryRecords } from '../../../api/diary.api'
import MessageToast from '../../../components/DialogBox/MessageDialog'
import DialogV2 from '../Create and Edit/DialogV2'
import { useEffect } from 'react'

export default function DiaryRecords() {
  const input = createRef();
  const navigation = useNavigation()
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState(false);
  const [liked, setLiked] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recordResponseList, setRecordResponseList] = useState([])
  const [record, setRecord] = React.useState({});

  const [search, setSearch] = useState("");

  const [recordTitle, setRecordTitile] = useState("");
  const [recordDesc, setRecordDesc] = useState("");
  const [action, setAction] = useState({parentKey: "add", id: 'new'})

  useEffect(() => {
    getAllDiaryResponses();
  }, []);

  const getAllDiaryResponses = () => {
    const userId = '635b10baf383232439911869'
    // fetchDiaryRecords(userId).then((data) => {
    //     setRecordResponseList(data)
    //     console.log(data)
    // })
    fetchAllRecMock().then((data) => {
        // setRecordResponseList(data?.data || [])
        console.log(data.data)
    })
  }

  const handlRecordTitle = (e) =>{
    setRecordTitile(e.nativeEvent.text)
  }

  const handlRecordDescription = (e) =>{
    setRecordDesc(e.nativeEvent.text)
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

const handleSubmit = async (event) => {
    const diary = {
        userId:'635b10baf383232439911869',
        title: recordTitle,
        description: recordDesc,
        isFavourite: 0
    }
    if (action.parentKey === "add") {
        addDiary(diary)
          .then((res) => {
            setShowAdd(false);
            setMessage(res.data);
            console.log(res.data);
            setRecordDesc("");
            setRecordTitile("");
            if(res.data.data) {
                setShowToast(true);
            } else {
                setShowToast(true);
            }
          }).catch((error) =>{
            console.log(error);
            setShowAdd(false);
        })
    } else if (action.parentKey === "edit") {
        editDiaryRecordById(diary)
        .then((res) => {
            setShowAdd(false);
            setMessage(res.data);
            console.log(res.data);
            setRecordDesc("");
            setRecordTitile("");
            if(res.data.data) {
                setShowToast(true);
            } else {
                setShowToast(true);
            }
          }).catch((error) =>{
            console.log(error);
            setShowAdd(false);
        })
    }
}

  return (
    <View style={styles.scrollView}>
        <View style={show || showAdd? styles.search1 : styles.search2}>
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
      {recordResponseList || [].filter((rec) => {
            if (search === "") {
                return rec;
            } else if (rec.title.toLowerCase().includes(search.toLowerCase())) {
               return rec;
            }
        }).map((row, index) => (
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
                        <Pressable key={index} onPress={(e) => setLiked((isLiked) => !isLiked)} value={row.isFavorite}>
                            <MaterialCommunityIcons
                                name={liked? 'heart' : 'heart-outline'}
                                size={28}
                                color={liked? '#759CFF' : '#759CFF'}
                            />
                        </Pressable>
                    </View>
                    <View>
                        <HStack m={2} spacing={5}>
                            <MaterialIcons name='edit'size={28} onPress={()=> {setShowAdd(true); setAction({parentKey: "edit", id: row._id}); }} />
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
      <MaterialIcons name='add-circle' size={60} style={styles.icon}  onPress={()=> {setShowAdd(true); setAction({parentKey: "add", id: 'new'});}}/>
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
          {
            showAdd &&
            <Provider>
                <DialogV2
                    show={showAdd} 
                    setShow={setShowAdd}
                    handlRecordTitle={handlRecordTitle}
                    handlRecordDescription={handlRecordDescription}
                    record={record}
                    handleSubmit={handleSubmit}
                    action={action}
                    recordTitle={recordTitle}
                    recordDesc={recordDesc}
                />
            </Provider>
          }
          {
            <MessageToast
                showToast={showToast}
                setShowToast={setShowToast}
                data={message}
            />
          }
    </View>
  );
}


