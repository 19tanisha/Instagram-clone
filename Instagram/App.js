import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from "./Navigate/Navigation";
import * as firebase from 'firebase';
import firebaseConfig from './Config'
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
export default function App() {
  return <Navigator/>;
    
  
}
