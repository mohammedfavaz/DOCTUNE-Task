import React,{useEffect} from 'react'
import { View, Text, TouchableOpacity, BackHandler } from 'react-native'

export default function MainPage({navigation}) {

    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Welcome</Text>
            <TouchableOpacity style={{ height: 50, width: "70%", backgroundColor: "#ff1", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate("SignUp")}>
                <Text>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, width: "70%", backgroundColor: "#ff1", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate("SignIn")}>
                <Text>SIGN IN</Text>
            </TouchableOpacity>
        </View>
    )
}
