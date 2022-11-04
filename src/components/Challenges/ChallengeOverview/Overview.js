import { HStack } from "@react-native-material/core";
import { Button, Text, View } from "react-native";
import {
  Colors,
  CommonConstants,
} from "../../../util/Constants/CommonConstants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Hr from "../../HorizontalLine/Hr";
import styles from "./styles";
import { ChallengeConstants } from "../../../util/Constants/ChallengeConstants";

export default function Overview({ title, description, onClick, isStarted, onDelete, onEdit }) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyles}>{ChallengeConstants.CHALLENGE_OVERVIEW}</Text>

        <HStack m={20} spacing={5}>
          <MaterialIcons
            name="edit"
            size={28}
            onPress={onEdit}
          />
          <MaterialCommunityIcons
            name="delete-outline"
            size={28}
            onPress={onDelete}
          />
        </HStack>
      </View>
      <Hr />
      <View style={styles.todoListContainerStyles}>
        <Text style={styles.titleStyles2}>{title}</Text>
        <Text style={styles.descriptionTextSize}>{description}</Text>
        <View style={styles.startButtonStyles}>
          <Button
            color={Colors.BLUE}
            onPress={onClick}
            title={isStarted ? CommonConstants.OPEN : CommonConstants.START}
          />
        </View>
      </View>
    </View>
  );
}
