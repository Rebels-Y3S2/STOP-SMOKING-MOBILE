import { useState } from "react";
import { Text, View } from "react-native";

import DropDown from "../../DropDown/DropDown";
import { Button } from "react-native-paper";
import styles from "./styles";
import { ChallengeConstants } from "../../../util/Constants/ChallengeConstants";
import { CommonConstants } from "../../../util/Constants/CommonConstants";

export default function ChallengeForm({ onSave, onCancel }) {
  const [type, setSmokingType] = useState(0);
  const [duration, setDuration] = useState(0);
  const userId = "63632b9d0cae67041458ba21";

  const smokingTypeOptions = [
    { label: ChallengeConstants.MORE_THAN_FIVE_A_DAY, value: 4 },
    { label: ChallengeConstants.TWO_FIVE_A_DAY, value: 3 },
    { label: ChallengeConstants.ONCE_A_DAY, value: 2 },
    { label: ChallengeConstants.TWO_FIVE_A_WEEK, value: 1 },
    { label: ChallengeConstants.ONCE_A_WEEK, value: 0 },
  ];

  const durationOptions = [
    { label: "60", value: 60 },
    { label: "30", value: 30 },
  ];

  function handleOnSave() {
    onSave({ userId, type, duration });
  }

  return (
    <View>
      <DropDown
        data={smokingTypeOptions}
        placeholder={"Choose an option"}
        setValue={setSmokingType}
      />
      <Text variant="subtitle 2" style={styles.textLable}>
        {CommonConstants.SMOKING_TYPE_SPAN}
      </Text>

      <DropDown
        data={durationOptions}
        placeholder={"Choose an option"}
        setValue={setDuration}
      />
      <Text variant="subtitle 2" style={styles.textLable}>
        {ChallengeConstants.CHALLENGE_DURATION_SPAN}
      </Text>

      <Button mode="outlined" onPress={onCancel} style={styles.button1}>
        {CommonConstants.CANCEL}
        Cancel
      </Button>

      <Button mode="contained" onPress={handleOnSave} style={styles.button2}>
        {CommonConstants.SAVE}
      </Button>
    </View>
  );
}

