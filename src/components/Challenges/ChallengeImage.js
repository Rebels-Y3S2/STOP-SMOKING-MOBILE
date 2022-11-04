import { Image, ImageBackground, StyleSheet } from "react-native";

const defaultImage = "https://i.ibb.co/m5T3Ycy/challenge.png";

export default function ChallengeImage({ uri = defaultImage }) {
  return (
    <ImageBackground
      style={{ height: 233, width: "100%" }}
      imageStyle={{ borderRadius: 12 }}
      source={{ uri }}
    />
  );
}
