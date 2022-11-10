import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
  VStack,
  HStack,
} from "@react-native-material/core";
import { View } from "react-native";
import {CommonConstants} from "../../util/Constants/CommonConstants";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";

export default function DialogBox({handleAction, setShow, show, title, message}){
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const dismissHandler = (type) =>{
    switch(type){
      case CommonConstants.OK:{
        handleAction()
        setShow(false);
        setVisible(false)
        break;
      }case CommonConstants.CANCEL:{
        setShow(false);
        setVisible(false)
      }
    }
    setShow(false)
    setVisible(false)
  }
  return (
    <>
    <View>
      <Dialog visible={show} onDismiss={dismissHandler}>
        <DialogHeader title={title} />
        <DialogContent>
          <Text>
            {message}
          </Text>
        </DialogContent>
        <HStack spacing={20} m={10}>
            <Button 
              title={<Text variant='subtitle 2' style={styles.cancelText}>{t(CommonConstants.CANCEL)}</Text>}
              compact
              variant="outlined"
              onPress={() => dismissHandler(CommonConstants.CANCEL)}
              style={styles.cancelBtn}
            />
            <Button
              title={<Text variant='subtitle 2' style={styles.saveText}>{`${t(CommonConstants.DELETE)}`}</Text>}
              compact
              variant="outlined"
              onPress={()=> dismissHandler(CommonConstants.OK)}
              style={styles.saveBtn}
            />
        </HStack>
      </Dialog>
      </View>
      <View style={{marginBottom:'80%'}}></View>
    </>
  );
};
