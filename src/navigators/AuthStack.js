import React,{ Component } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Signup from '../screens/Signup/Signup';
import StudentSignup from '../screens/StudentSignup/StudentSignup';
import LinkAccount from '../screens/LinkAccount/LinkAccount';
import ParentSignup from '../screens/ParentSignup/ParentSignup';
import StudentLogin from '../screens/StudentLogin/StudentLogin';
import ParentLogin from '../screens/ParentLogin/ParentLogin';
import SplashScreen from '../screens/Splash/Splash'

const Stack = createStackNavigator();
function authStack() {
    return (
        <Stack.Navigator initialRouteName="signupScreen" headerMode="screen">
            <Stack.Screen name="signupScreen" component={Signup} options={{headerShown:false}} />
            <Stack.Screen name="studentSignupScreen" component={StudentSignup} options={{headerShown:false}} />
            <Stack.Screen name="linkAccountScreen" component={LinkAccount} options={{headerShown:false}} />
            <Stack.Screen name="parentSignupScreen" component={ParentSignup} options={{headerShown:false}} />
            <Stack.Screen name="loginScreen" component={Login} options={{headerShown:false}} />
            <Stack.Screen name="studentLoginScreen" component={StudentLogin} options={{headerShown:false}} />            
            <Stack.Screen name="parentParentScreen" component={ParentLogin} options={{headerShown:false}} />
            <Stack.Screen name="splashscreen" component={SplashScreen} options={{headerShown:false}} />
        </Stack.Navigator>
      
    )
}

export default authStack;
