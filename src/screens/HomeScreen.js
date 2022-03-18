import React from "react";
import { View,Text,StyleSheet } from "react-native";
const HomeScreen =({navigation})=>{
    return(
        <View style={styles.container}>
            <Text> Day la trang chu</Text>
        </View>
    );
}
export default HomeScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    }
})

