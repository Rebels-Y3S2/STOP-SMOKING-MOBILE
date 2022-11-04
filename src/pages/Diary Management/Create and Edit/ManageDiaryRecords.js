import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from "@react-native-material/core";
import { View, TextInput } from "react-native";
import { VStack, HStack, Box, Divider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "./styles";
import { fetchDiaryRecordById } from "../../../api/diary.api";
import { useEffect } from "react";
// import Dialog from "react-native-dialog";

export default function ManageDiaryRecords(props){
  const [visible, setVisible] = useState(false);
  const dismissHandler = () =>{
    props.setShow(false)
    setVisible(false)
  }
  const {
    show,
    setShow,
    handlRecordTitle,
    handlRecordDescription,
    handleSubmit,
    action,
  } = props;

  const [diaryRecord, setDiaryRecord] = useState({})

  useEffect(() => {
    fetchDiaryRecordById(action.id).then((res) => {
      setDiaryRecord(res.data.data)
    })
  }, []);

  return (
    <>
    <View>
      <Dialog visible={show} onDismiss={dismissHandler} style={{zIndex: 1000}}>
        <HStack spacing={action.parentKey === "add"? 0 : 25}>
          <View><DialogHeader title={action.parentKey === "add" ? "Create Diary" : "Edit Diary"} /></View>
          <View style={styles.closeIcon}><MaterialCommunityIcons name='close'size={18} onPress={()=> setShow(false)} /></View>
        </HStack>
        <Divider />
        <DialogContent>
          <View>
            <TextInput
              variant="outlined"
              placeholder='Diary Title'
              style={styles.title}
              onChange={handlRecordTitle}
              defaultValue={diaryRecord?.title || ""}
              required
            />
            <Text variant='subtitle 2' style={styles.textLable}>Diary Title</Text>
          </View>
          <View>
            <TextInput
              variant="outlined"
              placeholder='Diary Description'
              style={styles.des}
              onChange={handlRecordDescription}
              defaultValue={diaryRecord?.description || ""}
              required
            />
            <Text variant='subtitle 2' style={styles.textLable}>Diary Description</Text>
          </View>
        </DialogContent>
          <VStack spacing={20}>
            <Button
              title={<Text variant='subtitle 2' style={styles.cancelText}>Cancel</Text>}
              compact
              variant="outlined"
              onPress={dismissHandler}
              style={styles.cancelBtn}
            />
            <Button
              title={<Text variant='subtitle 2' style={styles.saveText}>Save</Text>}
              compact
              variant="outlined"
              onPress={handleSubmit}
              style={styles.saveBtn}
            />
          </VStack>
      </Dialog>
      
      </View>
      <View style={{marginBottom:'80%'}}></View>
    </>
  );
};
