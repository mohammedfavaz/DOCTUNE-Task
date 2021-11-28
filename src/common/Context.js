import React, { useState, useEffect } from 'react';
import { AppContext } from './Constants.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Router from './Router';
function Context() {
    const [RegisterUsers, setRegisterUsers] = useState([]);
    const [UserDetails, setUserDetails] = useState([])

    useEffect(() => {
        RegisteredData()
    }, [])
    const RegisterData = async (arr) => {
        try {
            const Register = JSON.stringify(arr)
            await AsyncStorage.setItem('@Registersaving', Register)
            console.log(Register);
        } catch (e) {
        }
    }
    const RegisteredData = async () => {
        try {
            const recevingData = await AsyncStorage.getItem('@Registersaving')
            setRegisterUsers(recevingData != null ? JSON.parse(recevingData) : [])
        } catch (e) {
        }
    }
    return (
        <AppContext.Provider
            value={{
                RegisterUsers, setRegisterUsers, RegisterData, UserDetails, setUserDetails
            }}>
            <Router />
        </AppContext.Provider>
    );
}
export default Context;