import Dialog from "react-native-dialog";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Image, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function MessageToast(props) {
    const {showToast, data, setShowToast} = props;
    return (
        <Dialog.Container visible={showToast} useNativeDriver>
            <Dialog.Title>{data.data? data.message : data?._message + '. Try again.'}</Dialog.Title>
            <Dialog.Description>
                {/* {data.data? 
                    <Text style={{backgroundColor: "green", borderRadius: 100}}>
                        <MaterialIcons name='check'size={50} color="white"/>
                    </Text> :
                    <Text style={{backgroundColor: "red", borderRadius: 100}}>
                        <MaterialIcons name='close'size={50} color="white"/>
                    </Text>
                } */}
            </Dialog.Description>
            <Dialog.Button label="Ok" onPress={()=> setShowToast(false)}/>
        </Dialog.Container>
    );
    
}
