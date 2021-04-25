import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,Alert, TextInput,ImageBackground} from 'react-native';
import Home from "../Screens/Home";
import Login from './Login';
import * as firebase from 'firebase'


const SignUp = (props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const userSignup = () => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then(()=>{
            Alert.alert("Successfully Registerd !")
            {props.navigation.replace("Home")}
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }
    return (
      <View style={styles.container}>
          <ImageBackground source = {require('../assets/loginimage.png')}
            style = {styles.bg}>
           <View>
              <TextInput
              placeholder="Email:" 
              style= {styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              />
              <TextInput
              placeholder="Password:" 
              style= {styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
              />
          </View>
          <View style={styles.button}>
              <TouchableOpacity onPress={userSignup}>
                <Text>
                    SignUp
                </Text>
              </TouchableOpacity>
          </View>
          <View style = {{flexDirection:'row', alignItems:'center'}}>
              <Text style={{fontSize:16}}>
                  Already have an account?
              </Text>
              <TouchableOpacity onPress={()=>{props.navigation.navigate(Login)}}>
                  <Text style={{fontSize:18, fontWeight:"bold"}}>
                      LogIn
                  </Text>
              </TouchableOpacity>
          </View>
          </ImageBackground>
      </View>
      
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:"#96bb7c"
    },
    input: {
        width:250,
        borderColor:'black',
        borderWidth:2,
        height:40,
        paddingLeft:5,
        borderRadius:30,
        margin:5,
        fontSize:18,
        


    },
    button:{
        height:30,
        width :90,
        backgroundColor:'#f875aa',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        margin:10
    },
    bg:{
        width : '100%',
        flex : 1,
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    
    
})
export default SignUp;
