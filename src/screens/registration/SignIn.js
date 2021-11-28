import React, { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../common/Constants'

export default function SignIn({ navigation }) {
    const [Data, setData] = useState({
        email: "",
        password: ""
    })
    const { RegisterUsers, setUserDetails } = useContext(AppContext)

    const CheckSignIn = () => {
        if (Data.email == "" || Data.password == "") {
            Toast.show("Enter Correct Feild")
        } else {
            var result = RegisterUsers.find((RegisterUsers) => RegisterUsers.Email == Data.email)
            console.log("Result",result);
            if (result) {
                if (result.Email == Data.email && result.Password == Data.password) {
                    StoreSignInData(result)
                } 
                else {
                    Toast.show("Incorrect password")
                }
            }
            else {
                Toast.show("Not Registerd this Email")
            }

        }

    }

    const StoreSignInData = async (result) => {
        try {
            const User = JSON.stringify(result)
            await AsyncStorage.setItem('@Signinrsaving', User)
            setUserDetails(result)
            navigation.navigate("Home")
        }
         catch (e) {
        }
        Data
    }

    return (
        <View style={{ alignItems: "center" }}>
            <Text style={{ marginTop: 50 }}>SIGN IN</Text>
            <TextInput style={{ height: 50, width: "70%", backgroundColor: "#f1e4fa", marginTop: 10 }} value={Data.email} onChangeText={(val) => setData(pre => ({ ...pre, email: val }))} placeholder="email"></TextInput>
            <TextInput style={{ height: 50, width: "70%", backgroundColor: "#f1e4fa", marginTop: 10 }} value={Data.password} onChangeText={(val) => setData(pre => ({ ...pre, password: val }))} placeholder="Password"></TextInput>
            <TouchableOpacity style={{ height: 50, width: "70%", backgroundColor: "#ff1", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }} onPress={() => CheckSignIn()}>
                <Text>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    )
}
