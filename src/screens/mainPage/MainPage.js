import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, BackHandler, Modal } from 'react-native'

export default function MainPage({ navigation }) {
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
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome </Text>
            <TouchableOpacity style={{ height: 50, width: "70%", backgroundColor: "#055e98", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate("SignUp")}>
                <Text style={{ color: "#fff" }}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, width: "70%", backgroundColor: "#055e98", borderRadius: 10, marginTop: 20, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.navigate("SignIn")}>
                <Text style={{ color: "#fff" }}>SIGN IN</Text>
            </TouchableOpacity>
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
