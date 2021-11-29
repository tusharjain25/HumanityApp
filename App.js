import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import Front from './components/Front';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Addform from "./components/Addform";
import Lookform from "./components/Lookform";



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const firebaseConfig ={
  apiKey: "AIzaSyAf3knpnLn5usQ63ZAhFhDH-j67YHW6rRQ",

  authDomain: "humanityfirebase.firebaseapp.com",

  databaseURL: "https://humanityfirebase-default-rtdb.firebaseio.com",

  projectId: "humanityfirebase",

  storageBucket: "humanityfirebase.appspot.com",

  messagingSenderId: "428050493336",

  appId: "1:428050493336:web:b0cd18515dee7f425885ed"

};
if(firebase.apps.length ===0){
firebase.initializeApp(firebaseConfig);
}
export default function App() {
  return (
    <View style={styles.container}>
     <NavigationContainer >
     <Stack.Navigator  initialRouteName='Front' screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Welcome" component={Front}/>
     <Stack.Screen name="Login" component={Login}/>
     <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="Home" component={Home}/>
       <Stack.Screen name="Addform" component={Addform}/>
        <Stack.Screen name="Lookform" component={Lookform}/>
     </Stack.Navigator>
     </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
});
