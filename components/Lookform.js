import React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,} from 'react-native';
import Constants from 'expo-constants';
const Lookform = ({ navigation }) => {
  return (
     <View style={styles.container}>
     <View style={styles.header}>
      <Text style={{fontSize:20}}>
       Event Details
      </Text>
     </View>
    </View>
  )
  }
  export default Lookform;
   const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
   
  },
 header:{
  height:70,
   backgroundColor:"#3F7FBF",
   justifyContent:'center',
   alignItems:"center",
   borderBottomColor:"black",
   borderBottomWidth:3,
 },
 
});