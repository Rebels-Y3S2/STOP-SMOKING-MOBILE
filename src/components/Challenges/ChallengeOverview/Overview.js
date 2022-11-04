import { Button, Text, View } from "react-native";
import { Colors, CommonConstants } from "../../../util/Constants/CommonConstants";
import Hr from "../../HorizontalLine/Hr";
import styles from "./styles";

export default function Overview({ title, description, onClick, isStarted }) {
  return (
    <View>
      <Text style={styles.titleStyles}>{"Challenge Overview"}</Text>
      <Hr />
      <View style={styles.todoListContainerStyles}>
        <Text style={styles.titleStyles2}>{title}</Text>
        <Text style={styles.descriptionTextSize}>{description}</Text>
        <View style={styles.startButtonStyles}>
          <Button color={Colors.BLUE} onPress={onClick} title={isStarted ? CommonConstants.OPEN : CommonConstants.START} />
        </View>
      </View>
    </View>
  );
}


