import { HStack, Provider, Text } from '@react-native-material/core'
import { useNavigation } from '@react-navigation/native'
import React, { createRef, useState } from 'react'
import { View, Pressable, TouchableOpacity   } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Card from '../../../components/Card/Card'
import DialogBox from '../../../components/DialogBox/DialogBox'
import { styles } from './styles'
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import moment from 'moment';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler'
import { ButtonGroup } from 'react-native-elements';
import CheckBox from 'expo-checkbox';
import { addDiary, deleteDiaryRecordById, editDiaryRecordById, fetchDiaryRecords } from '../../../api/diary.api'
import MessageToast from '../../../components/DialogBox/MessageDialog'
import ManageDiaryRecords from '../Create and Edit/ManageDiaryRecords'
import { useEffect } from 'react'

export default function DiaryRecords() {
  const input = createRef();
  const navigation = useNavigation()
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState(false);
  const [liked, setLiked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recordResponseList, setRecordResponseList] = useState([])
  const [record, setRecord] = React.useState({});

  const [search, setSearch] = useState("");

  const [recordTitle, setRecordTitile] = useState("");
  const [recordDesc, setRecordDesc] = useState("");
  const [action, setAction] = useState({parentKey: "add", id: 'new'});
  const [deleteRecId, setDeleteRecId] = useState(0);

  useEffect(() => {
    getAllDiaryResponses();
  }, []);

  const getAllDiaryResponses = () => {
    const userId = '635b10baf383232439911869'
    fetchDiaryRecords(userId).then((data) => {
        setRecordResponseList(data.data?.data)
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

  const checkTitleValidity = value => {
    const isValidLength = /^.{3,50}$/;
    if (!isValidLength.test(value)) {
      return 'Title must be 3-50 Characters Long';
    }

    return null;
  };

  const handleSubmit = async (event) => {
    const checkTitle = checkTitleValidity(recordTitle);
    const diary = {
        userId:'635b10baf383232439911869',
        title: recordTitle,
        description: recordDesc,
        isFavourite: false
    }
    if (!checkTitle) {
      if (action.parentKey === "add") {
          addDiary(diary)
            .then((res) => {
              setShowAdd(false);
              setMessage(res.data);
              setRecordDesc("");
              setRecordTitile("");
              if(res.data.data) {
                  setShowToast(true);
              } else {
                  setShowToast(true);
              }
              getAllDiaryResponses();
            }).catch((error) =>{
              console.log(error);
              setShowAdd(false);
          })
      } else if (action.parentKey === "edit") {
          editDiaryRecordById(action.id, diary)
          .then((res) => {
              setShowAdd(false);
              setMessage(res.data);
              setRecordDesc("");
              setRecordTitile("");
              if(res.data.data) {
                  setShowToast(true);
              } else {
                  setShowToast(true);
              }
              getAllDiaryResponses();
            }).catch((error) =>{
              console.log(error);
              setShowAdd(false);
          })
      }
    } else {
      alert(checkTitle);
    }
  }

  const handleDelete = () =>{
    deleteDiaryRecordById(deleteRecId)
    .then((res) =>{
      getAllDiaryResponses();
    }).catch((error) => {
      console.log(error);
    })
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
            {/* {recordResponseList?.length ===  0 &&
              <Text>No records found!</Text>
            } */}
            {recordResponseList?.filter((rec) => {
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
                          <View key={index}>
                              <TouchableOpacity key={index} onPress={(e) => {
                                  // setLiked(!liked)
                                  // let localLiked = index;
                                  // localLiked = !localLiked;
                                  // setLiked(localLiked);
                                  // console.log(liked)
                                  setLiked(!liked);
                                }}
                                value={row?.isFavorite}
                              >
                                  <MaterialCommunityIcons
                                      name={liked? 'heart' : 'heart-outline'}
                                      size={28}
                                      color={liked? '#759CFF' : '#759CFF'}
                                  />
                              </TouchableOpacity>
                          </View>
                          <View>
                              <HStack m={2} spacing={5}>
                                  <MaterialIcons name='edit'size={28} onPress={()=> {setShowAdd(true); setAction({parentKey: "edit", id: row._id}); }} />
                                  <MaterialCommunityIcons name='delete-outline'size={28} onPress={()=> {setShow(true); setDeleteRecId(row._id)}}  />
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
                    id={deleteRecId}
                    title='Delete Reminder'
                    message='Are you sure to delete the diary'
                    handleAction={handleDelete}
                />
            </Provider>
          }
          {
            showAdd &&
            <Provider>
                <ManageDiaryRecords
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


