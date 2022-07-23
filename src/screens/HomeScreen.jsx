import react from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen= ()=>{

    const navigation = useNavigation();

    return(
        <View>
            <Text> Home Screen </Text>

            <TouchableOpacity onPress={()=>navigation.navigate("Stack")}>
                <Text> go to Stack</Text>
            </TouchableOpacity>
        </View>
    )
}


export default HomeScreen