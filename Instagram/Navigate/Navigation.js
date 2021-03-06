import React from 'react';
import  {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../Screens/Login";
import SignIn from "../Screens/SignIn";
import Initial from "../Screens/Initial";
import Home from "../Screens/Home";
import{createMaterialBottomTabNavigator}from '@react-navigation/material-bottom-tabs'
import Chats from '../Screens/Chats';
import Like from '../Screens/Like';
import Account from '../Screens/Account';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {  } from 'react-native-vector-icons'

const Stack = createStackNavigator();
function Navigator (){
    return(
    <NavigationContainer>
        <Stack.Navigator

        >
            <Stack.Screen name ="Initial" component ={Initial}
            options={{
                headerShown: false

            }}/>
            <Stack.Screen name ="Login" component ={Login}
            options={{
                headerShown: false
            }}/>
            <Stack.Screen name ="SignUp" component ={SignIn}
            options={{
                headerShown: false
            }}/>
            <Stack.Screen name = "Home" component = {BottomTab}
            options={{
                headerShown: false
            }}/>
            

        </Stack.Navigator>
    </NavigationContainer>
);
} 
const Tab = createMaterialBottomTabNavigator();
function BottomTab(){
    return(
        <Tab.Navigator 
        activeColor = 'white'
        inactiveColor = 'white'
        shifting = {true}
        >
            <Tab.Screen name = "Home" component = {Home}
            options={{
                tabBarColor:'black',
                tabBarLabel:'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
            }}
            />
            <Tab.Screen name = "Chats" component = {Chats}
            options={{
                tabBarColor:'black',
                tabBarLabel:'Chat',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="chat" color={color} size={26} />
                    ),
            }}
            />
            <Tab.Screen name = "Like" component = {Like}
            options={{
                tabBarColor:'black',
                tabBarLabel:'Likes',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="heart" color={color} size={26} />
                    ),
            }}
            />
            <Tab.Screen name = "Account" component = {Account}
            options={{
                tabBarColor:'black',
                tabBarLabel:'Account',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
            }}
            />
        </Tab.Navigator>
    )
}
export default Navigator;