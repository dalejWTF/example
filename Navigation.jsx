import react from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, Feather, MaterialCommunityIcons } from "@expo/vector-icons";


//Screens
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import StackScreen from "./src/screens/StackScreen";
import StackOnStackScreen from "./src/screens/StackOnSctackSreen";
import LoginScreen from "./src/screens/LoginScreen";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Stacks(){
    return (
        <Stack.Navigator
        >
            <Stack.Screen
            name="HomeScreen"
            //Ventana 1
            component={HomeScreen}
            
            />
                
            <Stack.Screen
            name="Stack"
            //Ventana 1.1
            component={StackScreen}
            />
            <Stack.Screen
            //Ventana 1.1.1
            name="StackOnStack"
            component={StackOnStackScreen}
            />

        </Stack.Navigator>
        
    )
}


function Tabs (){
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: "green",
            tabBarActiveBackgroundColor: ""
        }}
        >
            <Tab.Screen name="Home" 
            component={Stacks} 
            options={{
                tabBarLabel: 'IDK',
                tabBarIcon: ({color, size}) =>(
                    <FontAwesome name="tachometer" size={24} color="black" />
                ),
                headerShown:false,
            }}/>  
            <Tab.Screen name="Settings" component= {SettingsScreen} options={{
                tabBarLabel: 'IDK',
                tabBarIcon: ({color, size}) =>(
                    <Feather name="settings" size={24} color="black" />
                ),
            }}/> 
            <Tab.Screen name ="Login" component={LoginScreen} options={{
                tabBarIcon: ({color, size})=>(
                    <MaterialCommunityIcons name="login" size={24} color="black" />
                )
            }}/>
        </Tab.Navigator>
    )
}


export default function Navigation(){
    return(
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )
}