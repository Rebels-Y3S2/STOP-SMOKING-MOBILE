import React, { useContext, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  Text,
} from "@react-native-material/core";
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { VStack, HStack, Box, Divider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LocaleContext } from "../../localization/LangProvider";

export default function LanguageSelection({ onClose, handleSelection }) {
  // const {setLocale} = useContext(LocaleContext);
  const [visible, setVisible] = useState(false);

  const dismissHandler = () => {
    setVisible(false);
  };
  const { t } = useTranslation();

  function handlePress(locale) {
    setLocale(locale);
    onClose();
  }

  function getValue(locale) {
    if (locale == "tm") {
      return "தமிழ்";
    }
    if (locale == "sn") {
      return "සිංහල";
    }
    if (locale == "en") {
      return "English";
    }
  }

  return (
    <>
      <View style={{ zIndex: 1000, marginTop: -520 }}>
        <Dialog visible={true} onDismiss={dismissHandler}>
          <HStack spacing={25}>
            <View>
              <DialogHeader title={`Change language`} />
            </View>
            <View style={styles.closeIcon}>
              <MaterialCommunityIcons
                name="close"
                size={18}
                onPress={onClose}
              />
            </View>
          </HStack>
          <Divider />
          <DialogContent>
            {/* <View style={styles.container}> */}
            <FlatList
              data={[{ key: "en" }, { key: "tm" }, { key: "sn" }]}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelection(item.key)}>
                  <Text style={styles.item}>{getValue(item.key)}</Text>
                </TouchableOpacity>
              )}
            />
            {/* </View> */}
          </DialogContent>
        </Dialog>
      </View>
      <View style={{ marginBottom: "80%" }}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  closeIcon: {
    marginLeft: "5%",
    marginTop: 20,
  },
});
