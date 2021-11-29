import React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,} from 'react-native';
import Constants from 'expo-constants';
const Addform = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={{fontSize:20}}>
       Add Event Details
      </Text>
     </View>
       <View style={styles.bottom}>
     <TextInput placeholder="Enter Event" style={styles.inputtext}/>
     <TouchableOpacity style={styles.inputbutton}
     onPress={this.addtask}
     >
     <Text style={{fontSize:20}}>
     +
     </Text>
     </TouchableOpacity>
     </View>
    </View>
  )
  }
  export default Addform;
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
 bottom:{
position:'absolute',
bottom:0,
left:0,
right:0,
borderTopColor:'black',
borderTopWidth:2
 },
 inputtext:{
   padding:20,
   outline:'none'
 },
 inputbutton:{
   position:'absolute',
   right:20,
   bottom:10,
   borderRadius:50,
   backgroundColor:'#3F7FBF',
   height:40,
   width:40,
   justifyContent:'center',
   alignItems:'center',

 }
});