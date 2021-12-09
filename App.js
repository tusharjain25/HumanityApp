import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";

import firebase from "firebase";

import Constants from 'expo-constants';
import Front from './components/Front';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Addform from "./components/Addform";
import Lookform from "./components/Lookform";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { LogBox } from 'react-native';

LogBox.ignoreLogs([`AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be inst`]);

const firebaseConfig = {
  apiKey: "AIzaSyAf3knpnLn5usQ63ZAhFhDH-j67YHW6rRQ",
  authDomain: "humanityfirebase.firebaseapp.com",
  databaseURL: "https://humanityfirebase-default-rtdb.firebaseio.com",
  projectId: "humanityfirebase",
  storageBucket: "humanityfirebase.appspot.com",
  messagingSenderId: "428050493336",
  appId: "1:428050493336:web:b0cd18515dee7f425885ed"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


export default function App() {



  const AuthStack = createStackNavigator();
  const AuthNavigator = () => {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="front"
          component={Front}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    );
  };

  const HomeStack = createStackNavigator();

  const HomeStackScreen = () => (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="addform" component={Addform} />
      <HomeStack.Screen name="lookform" component={Lookform} />
    </HomeStack.Navigator>
  );

  const Navigation = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
      const unsuscribe = firebase.auth().onAuthStateChanged((userExist) => {
        if (userExist) {
          setUser(userExist);
        } else {
          setUser("");
        }
      });
      return unsuscribe;
    }, []);

    return (
      <NavigationContainer>
        {user ? <HomeStackScreen /> : <AuthNavigator />}
      </NavigationContainer>
    );
  };

  return (
    <>
      <Navigation />
    </>
  );
}