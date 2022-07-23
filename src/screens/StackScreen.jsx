import react from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


const StackScreen= ()=>{
    const navigation= useNavigation()
    return(
        <View>
            <Text> Stack Screen </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("StackOnStack")}>
                <Text> go to Stack on Stack</Text>
            </TouchableOpacity>
        </View>
    )
}


export default StackScreen