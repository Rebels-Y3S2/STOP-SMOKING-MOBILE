import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import styles from "./styles";
import { CommonConstants } from "../../../util/Constants/CommonConstants";
import { useTranslation } from 'react-i18next'
import { ChallengeConstants } from "../../../util/Constants/ChallengeConstants";

export default function ChallengeCard({ image, title, duration, type, id }) {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(CommonConstants.CHALLENGE_OVERVIEW_PATH, {id})}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.imageStyles}
          source={{ uri: image, width: 78, height: 78 }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleStyles}>{title}</Text>
          <Text>{t(ChallengeConstants.DURATION)} : {duration}</Text>
          <Text>{t(ChallengeConstants.TYPE)} : {type}</Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

