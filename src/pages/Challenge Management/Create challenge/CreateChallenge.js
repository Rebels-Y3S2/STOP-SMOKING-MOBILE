import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { addChallenge } from "../../../api/challenge.api";
import ChallengeForm from "../../../components/Challenges/ChallengeForm/ChallengeForm";
import ChallengeImage from "../../../components/Challenges/ChallengeImage";
import PopupContainer from "../../../components/Contaner/PopupContainer";
import BigHeaderBackground from "../../../components/HeaderBackground/HeaderBackground";
import { CommonConstants } from "../../../util/Constants/CommonConstants";

export default function CreateChallenge() {
  const navigation = useNavigation();

  function handleSaveChallenge(challengeObj) {
    addChallenge(challengeObj)
      .then(res => {
        navigation.navigate(CommonConstants.CHALLENGES_SCREEN_PATH, {refresh: true});
      })
      .catch(err => {
        console.log(err);
      })
  }

  function handleCancel() {
    navigation.navigate(CommonConstants.CHALLENGES_SCREEN_PATH);
  }

  return (
    <View>
      <BigHeaderBackground />
      <PopupContainer firstContainer>
        <ChallengeImage />
      </PopupContainer>

      <PopupContainer>
        <ChallengeForm onSave={handleSaveChallenge} onCancel={handleCancel} />
      </PopupContainer>
    </View>
  );
}
