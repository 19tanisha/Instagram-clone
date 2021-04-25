/*import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  ImageBackground,
} from "react-native";
import Home from "../Screens/Home";
import Login from "./Login";
import * as firebase from "firebase";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Successfully Registerd !");
        {
          props.navigation.replace("Home");
        }
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/loginimage.png")}
        style={styles.bg}
      >
        <View>
          <TextInput
            placeholder="Email:"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            placeholder="Password:"
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={userSignup}>
            <Text>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 16 }}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(Login);
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>LogIn</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#96bb7c",
  },
  input: {
    width: 250,
    borderColor: "black",
    borderWidth: 2,
    height: 40,
    paddingLeft: 5,
    borderRadius: 30,
    margin: 5,
    fontSize: 18,
  },
  button: {
    height: 30,
    width: 90,
    backgroundColor: "#f875aa",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
  bg: {
    width: "100%",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignUp;
*/

import React, { Component, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import * as firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import Login from "./Login";
import { auth } from "../Config";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
        if (authUser.displayName) {
        } else {
          return authUser.updateProfile({
            displayName: username,
          });
        }
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, username]);

  const userSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert("Successfully Registerd !");
        {
          props.navigation.navigate("Home");
        }
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={require("../assets/bg.png")} style={styles.bg}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View style={{ height: 30 }}></View>
          <TouchableOpacity
            style={styles.register}
            onPress={userSignup}
            type="submit"
          >
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              Register
            </Text>
          </TouchableOpacity>
          <View style={styles.login}>
            <Text style={styles.accnt}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate(Login);
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 5,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  login: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  accnt: {
    fontSize: 17,
    color: "white",
  },
  input: {
    width: "90%",
    marginBottom: 10,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "black",
    paddingLeft: 10,
    borderRadius: 10,
    height: 40,
  },
  register: {
    alignItems: "center",
    backgroundColor: "black",
    height: 50,
    justifyContent: "center",
    borderRadius: 20,
    width: 150,
    marginTop: 150,
  },
});

export default SignUp;
