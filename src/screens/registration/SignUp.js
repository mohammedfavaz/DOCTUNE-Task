import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Toast from 'react-native-simple-toast';
import { AppContext } from '../../common/Constants'

export default function SignUp({navigation}) {
    const [Data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const { RegisterUsers, setRegisterUsers, RegisterData, setUserDetails,setUserdetails } = useContext(AppContext)

    const checkingUser = () => {
        if (Data.name == "" || Data.email == ""||Data.password==""){
            Toast.show("Enter Correct Feild")
        }else{
            if(RegisterUsers.find((RegisterUsers) =>RegisterUsers.Email==Data.email)){
                Toast.show("Already Email Exsist")
            }else{
                Register()
            }
        }
    }
    const Register = () => {
        var arr = RegisterUsers
        arr.push({ Name: Data.name, Email: Data.email, Password: Data.password })
        setRegisterUsers(arr)
        RegisterData(arr)
        navigation.navigate('SignIn')
    }

    return (
        <View style={{ alignItems: "center" }}>
            <Text style={{ marginTop: 50 }}>SIGN UP</Text>
            <TextInput style={{ height: 50, width: "70%", backgroundColor: "#f1e4fa", marginTop: 10,borderRadius:5 }} value={Data.name} onChangeText={(val) => setData(pre => ({ ...pre, name: val }))} placeholder="Name"></TextInput>
            <TextInput style={{ height: 50, width: "70%", backgroundColor: "#f1e4fa", marginTop: 10,borderRadius:5 }} value={Data.email} onChangeText={(val) => setData(pre => ({ ...pre, email: val }))} keyboardType="email-address" placeholder="Email"></TextInput>
            <TextInput style={{ height: 50, width: "70%", backgroundColor: "#f1e4fa", marginTop: 10,borderRadius:5 }} value={Data.password} onChangeText={(val) => setData(pre => ({ ...pre, password: val }))} placeholder="Password"></TextInput>
            <TouchableOpacity style={{ height: 50, width: "70%", backgroundColor: "#ff1", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }} onPress={() => { checkingUser() }}>
                <Text>SIGN UP</Text>
            </TouchableOpacity>
            {/* <Text>Already have an account? <TouchableOpacity><Text>Sign in</Text></TouchableOpacity></Text> */}
        </View>
    )
}
