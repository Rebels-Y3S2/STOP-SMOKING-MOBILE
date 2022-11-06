import { HStack, Provider, Text } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import React, { createRef, useState } from 'react';
import { View, TouchableOpacity   } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Card from '../../../components/Card/Card';
import DialogBox from '../../../components/DialogBox/DialogBox';
import { styles } from './styles';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import moment from 'moment';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler'
import { ButtonGroup } from 'react-native-elements';
import { addDiary, deleteDiaryRecordById, editDiaryRecordById, fetchDiaryRecords } from '../../../api/diary.api';
import MessageToast from '../../../components/DialogBox/MessageDialog';
import ManageDiaryRecords from '../Create and Edit/ManageDiaryRecords';
import { useEffect } from 'react';
import useMap from '../../../hooks/useMap';
import { DiaryColorsConstants, DiaryConstants, DiaryIconsConstants } from '../../../util/Constants/DiaryConstants';
import { useTranslation } from 'react-i18next';

export default function DiaryRecords() {
  const input = createRef();
  const navigation = useNavigation()
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [message, setMessage] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recordResponseList, setRecordResponseList] = useState([])
  const [record, setRecord] = React.useState({});
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const [recordTitle, setRecordTitile] = useState("");
  const [recordDesc, setRecordDesc] = useState("");
  const [action, setAction] = useState({parentKey: "add", id: 'new'});
  const [deleteRecId, setDeleteRecId] = useState(0);

  const [likeMap, { set }] = useMap([[]]);
  const [selectedRecId, setSelectedRecId] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

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
              <MaterialIcons name={`${t(DiaryIconsConstants.ASSIGNEMNT)}`} size={20} color={selectedIndex === 1 ? `${t(DiaryColorsConstants.BLACK)}` : `${t(DiaryColorsConstants.WHITE)}`}/>
              <Text color={selectedIndex === 1 ? `${t(DiaryColorsConstants.BLACK)}` : `${t(DiaryColorsConstants.WHITE)}`} style={styles.tabBtnText}>{`${t(DiaryConstants.RECORDS)}`}</Text>
          </HStack>
      )
  }

  const tabBtn2 = () => {
      return (
          <HStack m={2} spacing={5}>
              <MaterialCommunityIcons name={`${t(DiaryIconsConstants.HEART)}`} size={20} color={selectedIndex === 0 ? `${t(DiaryColorsConstants.BLACK)}` : `${t(DiaryColorsConstants.WHITE)}`}/>
              <Text color={selectedIndex === 0 ? `${t(DiaryColorsConstants.BLACK)}` : `${t(DiaryColorsConstants.WHITE)}`} style={styles.tabBtnText}>{`${t(DiaryConstants.FAVORITES)}`}</Text>
          </HStack>
      )
  }

  const buttons = [{ element: tabBtn1 }, { element: tabBtn2 }]

  const checkTitleValidity = value => {
    const isValidLength = /^.{3,50}$/;
    if (!isValidLength.test(value)) {
      return `${t(DiaryConstants.TITLE_MUST_BE_3_50_CHARACTERS_LONG)}`;
    }

    return null;
  };

  const handleSubmit = async (event) => {
    const checkTitle = checkTitleValidity(recordTitle);
    const diary = {
        userId:'635b10baf383232439911869',
        title: recordTitle,
        description: recordDesc,
        isFavorite: false
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

  const getLike = (index) => {
    if (likeMap.has(index)) {
        return likeMap.get(index); 
    } else {
        return false;
    }
  } 

  const handleLike = (index, value) => {
      set(index, value);
      setIsTrue(value);
  }

  useEffect(() => {
    if(action.parentKey === "edit-fav") {
      const diary = {
        isFavorite: isTrue === true ? true : false
      }
      editDiaryRecordById(action.id, diary)
        .then((res) => {
          getAllDiaryResponses();
        }).catch((error) =>{
          console.log(error);
        })
    }
  }, [action]);

  const AllRecords = (row, index) => {
    return (
      <View key={row._id}>
        <Card 
          style={styles.card}
          title={
            <HStack m={0} spacing={100}>
              <Text style={styles.title}>{row.title}</Text>
                <Text style={styles.date}>
                  {moment(row.createdAt).format('M/D')}
                </Text>
            </HStack>}
          children={
            <>
              <View>
                <HStack m={0} spacing={1} >
                  <Text style={styles.lable}>{row.description + " " + row.isFavorite}</Text>
                </HStack>
                <HStack m={0} spacing={240} style={styles.btns}>
                  <View key={index}>
                    <TouchableOpacity key={index}
                      onPress={(e) => {
                        handleLike(index, !getLike(index));
                        setAction({parentKey: "edit-fav", id: row._id});
                      }}
                      value={row.isFavorite}
                    >
                      <MaterialCommunityIcons
                        name={row.isFavorite ? `${t(DiaryIconsConstants.HEART)}` : `${t(DiaryIconsConstants.HEART_OUTLINE)}`}
                        size={28}
                        color={row.isFavorite ? `${t(DiaryColorsConstants.LIGHT_BLUE)}` : `${t(DiaryColorsConstants.LIGHT_BLUE)}`}
                      />
                        </TouchableOpacity>
                      </View>
                    <View>
                      <HStack m={2} spacing={5}>
                        <MaterialIcons name={`${t(DiaryIconsConstants.EDIT)}`} size={28} onPress={()=> {setShowAdd(true); setAction({parentKey: "edit", id: row._id}); }} />
                        <MaterialCommunityIcons name={`${t(DiaryIconsConstants.DELETE_OUTLINE)}`} size={28} onPress={()=> {setShow(true); setDeleteRecId(row._id)}}  />
                      </HStack>
                    </View>
                  </HStack>
                </View>
              </>
            }
          />
        </View>
    );
  }

  const FavoriteRecords = (row, index) => {
    return (
      <View key={row._id}>
        {row.isFavorite && (
          <Card 
            style={styles.card}
            title={
              <HStack m={0} spacing={100}>
                <Text style={styles.title}>{row.title}</Text>
                  <Text style={styles.date}>
                    {moment(row.createdAt).format('M/D')}
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
                      <TouchableOpacity
                        key={index}
                        onPress={(e) => {
                          handleLike(index, !getLike(index));
                          setAction({parentKey: "edit-fav", id: row._id});
                        }}
                        value={row.isFavorite}
                      >
                        <MaterialCommunityIcons
                          name={row.isFavorite ? `${t(DiaryIconsConstants.HEART)}` : `${t(DiaryIconsConstants.HEART_OUTLINE)}`}
                          size={28}
                          color={row.isFavorite ? `${t(DiaryColorsConstants.LIGHT_BLUE)}` : `${t(DiaryColorsConstants.LIGHT_BLUE)}`}
                        />
                          </TouchableOpacity>
                        </View>
                      <View>
                        <HStack m={2} spacing={5}>
                          <MaterialIcons name={`${t(DiaryIconsConstants.EDIT)}`} size={28} onPress={()=> {setShowAdd(true); setAction({parentKey: "edit", id: row._id}); }} />
                          <MaterialCommunityIcons name={`${t(DiaryIconsConstants.DELETE_OUTLINE)}`} size={28} onPress={()=> {setShow(true); setDeleteRecId(row._id)}}  />
                        </HStack>
                      </View>
                  </HStack>
                </View>
              </>
            }
          />
        )}
        
        </View>
    );
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
                placeholder={`${t(DiaryConstants.SEARCH_HERE)}`}
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
            {recordResponseList?.filter((rec) => {
                  if (search === "") {
                      return rec;
                  } else if (rec.title.toLowerCase().includes(search.toLowerCase())) {
                    return rec;
                  }
              }).map((row, index) => (
                <View>
                  {selectedIndex === 0 ? AllRecords(row, index) : FavoriteRecords(row, index)}
                  
                </View>
              ))
            }
            </View>
        </ScrollView>
      <MaterialIcons name={`${t(DiaryIconsConstants.ADD_CIRCLE)}`} size={60} style={styles.icon}  onPress={()=> {setShowAdd(true); setAction({parentKey: "add", id: 'new'});}}/>
          {
            show &&
            <Provider>
                <DialogBox
                    show={show} 
                    setShow={setShow}
                    id={deleteRecId}
                    title={`${t(DiaryConstants.DELETE_DIARY)}`}
                    message={`${t(DiaryConstants.ARE_YOU_SURE_TO_DELETE_THE_DIARY)}`}
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


