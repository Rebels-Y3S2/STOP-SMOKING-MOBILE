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

export default function DialogBoxUserDeletion(props){
  const [visible, setVisible] = useState(false);
  const dismissHandler = () =>{
    props.setShow(false)
    setVisible(false)
  }
  return (
    <>
    <View>
      <Dialog visible={props.show} onDismiss={dismissHandler}>
        <DialogHeader title={props.title} />
        <DialogContent>
          <Text>
            {props.message}
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={dismissHandler}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={props.handlePress}
          />
        </DialogActions>
      </Dialog>
      
      </View>
      <View style={{marginBottom:'10%'}}></View>
    </>
  );
};
