import { Image, View } from "react-native";
import ChallengeForm from "../../../components/Challenges/ChallengeForm";
import ChallengeImage from "../../../components/Challenges/ChallengeImage";
import PopupContainer from "../../../components/Contaner/PopupContainer";
import BigHeaderBackground from "../../../components/HeaderBackground/HeaderBackground";

export default function CreateChallenge() {
    return (
        <View>
            <BigHeaderBackground />
            <PopupContainer firstContainer>
                <ChallengeImage />
            </PopupContainer>
            
            <PopupContainer>
                <ChallengeForm />
            </PopupContainer>
        </View>
    )
}