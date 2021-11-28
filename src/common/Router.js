import * as React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../screens/mainPage/MainPage';
import SignIn from '../screens/registration/SignIn';
import SignUp from '../screens/registration/SignUp';
import Splash from '../screens/splash/Splash';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator()

export default function Router() {

    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="black" />
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Mainpage" component={MainPage} options={{ headerShown: false }} />
                <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
