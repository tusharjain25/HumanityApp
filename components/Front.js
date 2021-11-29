import React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image,} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Front = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.container1}>HUMANITY</Text>
        <Text style={styles.container2}>HELP INDIA TOGETHER...</Text>
        <Image style={styles.img1} source={require('../assets/humanity.jpg')} />
      </View>
      <View style={styles.footer}>
      <Image style={styles.img2}  source={require("../assets/flag.jpg")} />
        <Text style={styles.container3}>
          HELLO,YOUR HEARTLY WELCOME TO OUR APP
        </Text>
        <TouchableOpacity
          style={styles.inputbutton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 20 ,alignSelf:"center",color:"white"}}>LOGIN<MaterialIcons name="navigate-next" color="white" size={20} /></Text>
          
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.inputbutton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={{ fontSize: 20,alignSelf:"center",color:"white" }}>SIGN UP<MaterialIcons name="navigate-next" color="white" size={20} /></Text>
          
        </TouchableOpacity>
      </View>
    </View>
  );
  };
  export default Front;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },
  header: {
    flex: 2,
    //borderColor:'purple',
    //borderWidth:1,
    //borderBottomLeftRadius:50,
    //borderBottomRightRadius:50,
    //borderRadius:80,
    //backgroundColor:'#DAA520',
  },
  footer: {
    flex: 1,
    //borderRadius:50,
    //borderBottomLeftRadius:30,
    //borderBottomRightRadius:30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: '#3F7FBF',
    //backgroundColor:'#DAA520',
  },
  container1: {
    //marginTop: 15,
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    backgroundColor: 'darkgrey',
  },
  container2: {
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    backgroundColor: 'red',
    color:'white',
  },
  container3: {
    marginTop: 20,
    textAlign: 'center',
    fontFamily: 'arial',
    fontWeight: 'bold',
    color:"white",
  },
  inputbutton: {
    marginTop: 10,
    alignSelf: 'center',
    width:"70%",
    textAlign:"center",
    backgroundColor:"red",
    //backgroundColor: '#ED790C',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    borderColor:'white',
    borderWidth:2,
    //justifyContent:'center',
    //textAlign:'center',
    //backgroundColor:'#00FF7F',
  },
  img1:{
    width: "100%",
    height: "90%",
  },
  img2: {
    width: 70,
    height: 50,
    borderRadius: 10,
    marginTop: 25,
    alignSelf: 'center',
    borderColor:'white',
    borderWidth:3,
    //left:150,
    //alignContent:'center',
    //alignItems:'center',
    //justifyContent:'center',
  },
});
