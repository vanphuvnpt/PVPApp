import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
const Stack = createNativeStackNavigator();
const AppNavigator =({navigation})=>{
return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
);

}
export default AppNavigator;
