import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center"
  },
  loadingHorizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 50
  },
    container: {
      flex: 1,
    },
    scrollView: {},
    icon:{
      position: 'absolute',
      left: '80%',
      top: 600,
      color: '#1658CD',
      boxShadow:'-8px 4px 24px rgba(0, 0, 0, 0.25)',
      zIndex: 1000,
  },
  middleTextContainer: {
    position: 'absolute', 
    top: 300, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  middleText: {
    fontSize: 18,
    color: '#656565'
  }
  });
  
export default styles;