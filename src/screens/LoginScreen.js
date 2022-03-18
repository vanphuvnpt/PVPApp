import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,Image,TextInput,Button,Alert } from "react-native";
import { useDispatch } from 'react-redux';

import { signIn } from "../store/actions/auth";


const LoginScreen =({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const authHandler=async()=>{
        let action;
        action=signIn(email,password);
        try{
            await dispatch(action);
            navigation.navigate('Home');
        } catch(err){
            console.log(120)
            Alert.alert('An Error Occurred', error, [{ text: 'Okay' }]);
        }

    }

    return(
        <View style={styles.container}>
           <Image  source={require('../assets/logo.png') } style={styles.logoImage} />
           <View style={styles.loginContainer}> 
           <View style={styles.inputView}>
              <TextInput 
                  placeholder="Tài khoản"
                  value={email}
                  returnKeyType="next"
                  onChangeText={(text) => setEmail(text)}

              />
           </View>
           <View style={styles.inputView}>
           <TextInput
               placeholder="Mật khẩu"
               value={password}
               onChangeText={(text) => setPassword(text)}
           />
           </View>

           <View style={styles.buttonView}>
           <Button 
               title="Đăng nhập"
               onPress={authHandler} 
           />

           </View>
           </View>


        </View>
    );
}
export default LoginScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    logoImage:{
        marginBottom:40,
        width:110,
        height:110

    },
    loginContainer:{
        flex:1,
        width:'90%',
        height:'90%',

    },
    inputView:{
        backgroundColor:'#ddd',
        margin:20,



    },
    buttonView:{
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
        height:40
    }


})

