import React  from 'react';
import{View, Text, TouchableOpacity,StyleSheet, Alert, Image, TextInput, ImageBackground} from 'react-native';
import Login from "../Screens/Login"
import SignIn from "../Screens/SignIn"
import {StatusBar} from 'expo-status-bar'

const Initial = (props) =>{return(


<View style = {styles.container}>
    <StatusBar style = 'dark'/>
    <ImageBackground source = {require('../assets/back1.png')}
    style = {styles.bg}>
        <View style = {{flexDirection:'row', justifyContent:'space-around', alignItems:'center', padding:80, marginTop:400}}>
        <TouchableOpacity onPress ={()=>{props.navigation.navigate(Login)}}>
            <View style = {styles.login}>
                <Text style = {{fontSize:18, fontWeight:"bold"}}>
                    LogIn
                </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress ={()=>{props.navigation.navigate(SignIn)}}>
            <View style = {styles.signup}>
                <Text style = {{fontSize:18, fontWeight:"bold"}}>
                    SignUp
                </Text>
            </View>
            
        </TouchableOpacity>
        </View>
    </ImageBackground>
</View>
)}
export default Initial;

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        
        
    },
    bg:{
        width : '100%',
        flex : 1,
        height:'100%',
        justifyContent:'center'
    },
    login: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffe3fe',
        height:50,
        width:90,
        borderRadius:80,
        borderWidth:1,

        
    },
    signup: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffe3fe',
        height:50,
        width:90,
        borderRadius:80,
        borderWidth:1,
        

        
    },
})