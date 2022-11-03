import { Text, View } from "react-native";
import DropDown from "../DropDown/DropDown";

export default function ChallengeForm() {
    // const 
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];

    return (
        <View>
            <DropDown data={data} placeholder={'Choose an option'}/>
            <Text>sss</Text>
            <DropDown data={data} placeholder={'Choose an option'}/>
        </View>
    )
}