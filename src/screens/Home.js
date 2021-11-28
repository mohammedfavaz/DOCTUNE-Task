import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, Modal,BackHandler } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../common/Constants'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';



export default function Home({ navigation }) {
    const { setUserDetails } = useContext(AppContext)
    const [ModalVisible, setModalVisible] = useState(false)
    const [exitModal, setexitModal] = useState(false)

    const backAction = () => {

        if (navigation.isFocused()) {
            setexitModal(true)
            return true;
        } else {
            return false;
        }
    };

    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );
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

            <Text>Welcome</Text>

            <TouchableOpacity style={{ height: 50, width: "70%", backgroundColor: "#3db566", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }} onPress={() => { getCurrentLocation(), setModalVisible(true) }}>
                <Text>Current Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, width: "70%", backgroundColor: "#fe4040", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }} onPress={() => { RemoveUser() }}>
                <Text>Log Out</Text>
            </TouchableOpacity>
            <Modal
                style={{ flex: 1, alignContent: "center", alignItems: "center" }}
                onRequestClose={() => setModalvisible(false)}
                visible={ModalVisible}
                transparent={true}
            >
                <View style={{ flex: 1, justifyContent: "center", backgroundColor: 'rgba(0,15,0,0.3)' }}>
                    <TouchableOpacity style={{ flex: 0.25 }} onPress={() => setModalVisible(false)}></TouchableOpacity>
                    <View style={{ flex: 0.5 }} >
                        <MapView style={{ height: 350, }}
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
                    <TouchableOpacity style={{ flex: 0.25 }} onPress={() => setModalVisible(false)}></TouchableOpacity>
                </View>
            </Modal>
            <Modal
                style={{ flex: 1, alignContent: "center", alignItems: "center" }}
                onRequestClose={() => setModalvisible(false)}
                visible={exitModal}
                transparent={true}
            >
                <View style={{ flex: 1, justifyContent: "center", backgroundColor: 'rgba(0,15,0,0.3)' }}>
                    <View style={{ height: "17%", width: "79%", backgroundColor: "#fff", justifyContent: "center", alignItems: "center", borderRadius: 5, alignSelf: "center", borderRadius: 5, }}>
                        <Text style={{ height: 30, width: 95 }} >Are you Sure?</Text>
                        <View style={{ width: "45%", flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <TouchableOpacity style={{ height: 25, width: 50, backgroundColor: "#F12D2D", justifyContent: "center", alignItems: "center", borderRadius: 5 }} onPress={() => BackHandler.exitApp()}><Text style={{ color: "#fff" }}>Yes</Text></TouchableOpacity>
                            <TouchableOpacity style={{ height: 25, width: 50, backgroundColor: "#96BB7C", justifyContent: "center", alignItems: "center", borderRadius: 5 }} onPress={() => setexitModal(false)}><Text style={{ color: "#fff" }}>No</Text></TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>


        </View>
    )
}
