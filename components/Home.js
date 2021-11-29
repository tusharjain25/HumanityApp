import React from 'react';
import { Text, View, StyleSheet,Pressable,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const Home = ({navigation}) =>{
  return(
   <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.text_header}>HOMEPAGE</Text>
    </View>

     <TouchableOpacity
          style={[styles.inputbutton,{marginTop:40}]}
          onPress={() => navigation.navigate('Addform')}>
          <Text style={{ fontSize: 20 ,alignSelf:"center",color:"white"}}>ADD AN EVENT<MaterialIcons name="navigate-next" color="white" size={20} /></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.inputbutton}
          onPress={() => navigation.navigate('Lookform')}>
          <Text style={{ fontSize: 20,alignSelf:"center",color:"white" }}>LOOK FOR EVENT<MaterialIcons name="navigate-next" color="white" size={20} /></Text>    
        </TouchableOpacity>

     <View style={styles.footer}>
     <TouchableOpacity style={styles.footericon} onPress={() => navigation.navigate('Home')} >
    <Feather name="home" color="grey" size={25} />
    </TouchableOpacity>

     </View>
   </View>
    )
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F7FBF',
    
  },
  header: {
    flex: .3,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: 'black',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
     color: 'white',
  },
  footer: {
    flex: .1,
    position:'absolute',
    bottom:0,
    width:"100%",
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    color: 'white',
  },
  footericon:{
  // textAlign:'center',
   alignSelf:'center',
  // justifyContent:'center',

  },
  text_header: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginTop:20,
    textAlign:'center',
    
  },
   inputbutton: {
    marginTop: 50,
    alignSelf: 'center',
    width:"70%",
    height:'30%',
    textAlign:"center",
    backgroundColor:"red",
    //backgroundColor: '#ED790C',
    borderRadius: 10,
    padding: 5,
   // marginBottom: 10,
    borderColor:'white',
    borderWidth:2,
    justifyContent:'center',
    //backgroundColor:'#00FF7F',
  },
});