import { StyleSheet, Text, View } from "react-native";
import Hr from "../../HorizontalLine/Hr";
import styles from "./styles";
import { useTranslation } from 'react-i18next';

export default function Todo({ title, todoList }) {
  const { t } = useTranslation();
  return (
    <View>
      <Text style={styles.titleStyles}>{title}</Text>
      <Hr />
      <View style={styles.todoListContainerStyles}>
        {todoList.map((item, index) => (
          <Text style={styles.todoStyles}>
            {"\u2B24" + " "}
            {t(item)}
          </Text>
        ))}
      </View>
    </View>
  );
}

