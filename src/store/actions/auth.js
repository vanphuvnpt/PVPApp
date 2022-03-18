import React from "react";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

export const authenticate = (userId, token, expiryTime) => {
    return (dispatch) => {     
      dispatch({ type: AUTHENTICATE, userId, token });
    };
  };

export const signIn=(email, password)=>{
    return async (dispatch)=>{
        if (email=='phupv.nan' && password=='123456')
        {
            const expirationDate = new Date(
                new Date().getTime()+100000
              );
            const resData=({
                localId:"phupv.nan",
                idToken:"1232",
                expiresIn:expirationDate

            });
            const { localId, idToken, expiresIn } = resData;
            dispatch(authenticate(localId, idToken, parseInt(expiresIn) * 1000));

            saveDataToStorage("phupv.nan","1232",expirationDate);
        }
        else{
        //     const errorResData = await response.json();
        //     const errorId = errorResData.error.message;
        //     let message = 'Something went wrong!';
        //     if (errorId === 'EMAIL_NOT_FOUND') {
        //     message = 'This email could not be found!';
        //    } else if (errorId === 'INVALID_PASSWORD') {
        //     message = 'This password is not valid!';
      }
      throw new Error(message);
        }
    }

const saveDataToStorage =(token,userId,expirationDate) =>{
    AsyncStorage.setItem(
        'userData',
        JSON.stringify({
            token,
            userId,
            expiryDate: expirationDate.toISOString()
        })
    )
}