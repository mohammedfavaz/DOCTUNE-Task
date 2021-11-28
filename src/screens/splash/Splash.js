import React, { useEffect, useContext} from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../common/Constants'

export default function Splash({navigation}) {
    const {  setUserDetails,UserDetails } = useContext(AppContext)

    useEffect(() => {
        setTimeout(() => {
            CheckSigninData()
            
        }, 3000);
    }, []);
    const CheckSigninData = async () => {
        try {
            const recevingData = await AsyncStorage.getItem('@Signinrsaving')
            console.log(recevingData);
            // setUserDetails(recevingData != null ? JSON.parse(recevingData) : [])
            if (recevingData!=null) {
                navigation.navigate("Home")
            } else {
                navigation.navigate("Mainpage")
            }
        } catch (e) {
        }
    }
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text> Welcome</Text>
        </View>
    )
}
