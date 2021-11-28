import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../common/Constants'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';



export default function Home({ navigation }) {
    const { setUserDetails } = useContext(AppContext)
    const [Map, setMap] = useState({
        latitude: 10.9760,
        longitude: 76.2254
    })
    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(info => {
            var marker = { latitude: info.coords.latitude, longitude: info.coords.longitude }
            setcurrentLocation(pre => ({ ...pre, marker }))
        })

    }

    const [currentLocation, setcurrentLocation] = useState({
        marker: { latitude: Map.latitude, longitude: Map.longitude },
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    });
    const RemoveUser = async () => {
        try {
            const removeData = await AsyncStorage.removeItem('@Signinrsaving')
            setUserDetails(removeData)
            navigation.navigate("Mainpage")
        } catch (e) {
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flex: 0.5 }} >
                <MapView style={{ height: 250, width: 250, }}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        ...currentLocation.marker,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}>
                    <Marker
                        coordinate={currentLocation.marker}
                        onDragEnd={e => setcurrentLocation({ marker: e.nativeEvent.coordinate })}
                        // onDrag={}
                        draggable
                    />
                </MapView>
            </View>
            <Text>Welcome</Text>

            <TouchableOpacity style={{ height: 50, width: "70%", backgroundColor: "#ff1", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }} onPress={() => getCurrentLocation()}>
                <Text>Current Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, width: "70%", backgroundColor: "#ff1", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }} onPress={() => { RemoveUser() }}>
                <Text>Log Out</Text>
            </TouchableOpacity>


        </View>
    )
}
