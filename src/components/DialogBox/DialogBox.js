import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from "@react-native-material/core";
import { View } from "react-native";
import {CommonConstants} from "../../util/Constants/CommonConstants";

export default function DialogBox({handleAction, setShow, show, title, message}){
  const [visible, setVisible] = useState(false);
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
        <DialogActions>
          <Button
            title={CommonConstants.CANCEL}
            compact
            variant={CommonConstants.VARIANT_TEXT}
            onPress={() => dismissHandler(CommonConstants.CANCEL)}
          />
          <Button
            title={CommonConstants.OK}
            compact
            variant={CommonConstants.VARIANT_TEXT}
            onPress={()=> dismissHandler(CommonConstants.OK)}
          />
        </DialogActions>
      </Dialog>
      </View>
      <View style={{marginBottom:'80%'}}></View>
    </>
  );
};
