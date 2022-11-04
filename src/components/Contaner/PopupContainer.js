import { View } from "react-native";
import styles from "./styles";

export default function PopupContainer({children, firstContainer}) {
    return (
        <View style={firstContainer ? styles.ContainerStylesForFirstContainer : styles.ContainerStyles}>
            {children}
        </View>
    );
};

