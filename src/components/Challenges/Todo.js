import { StyleSheet, Text, View } from "react-native";

export default function Todo({ title, todoList }) {
  return (
    <View>
      <Text style={styles.titleStyles}>Oh ye Challenges</Text>
      <View
        style={{
          borderBottomColor: "#00000036",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.todoListContainerStyles}>
        {todoList.map((item, index) => (
          <Text style={styles.todoStyles}>
            {"\u2B24" + " "}
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyles: {
    marginVertical: 20,
    marginHorizontal: 17,
    fontSize: 18,
    font: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#434343'
  },
  todoListContainerStyles: {
    marginVertical: 46.5,
    marginHorizontal: 18
  },
  todoStyles: {
    padding: 7
  }

});