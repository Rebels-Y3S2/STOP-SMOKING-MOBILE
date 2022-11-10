import { IconButton } from "@react-native-material/core";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Menu } from "react-native-popup-menu";

export default function CustomMenu() {
    const [showMenu, setShowMenu] = useState(false);
  
    return (
      <View style={{}}>
        <Menu
          visible={showMenu}
          onDismiss={() => setShowMenu(false)}
          anchor={

            <IconButton onPress={() => setShowMenu(true)} icon={props => <Icon name="menu" {...props} />} />

          }>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          {/* <Divider /> */}
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    );
  };