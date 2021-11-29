import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const Signup = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textinputChange: false,
    secureTextEntry: true,
  });
  const textinputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textinputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textinputChange: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>REGISTER NOW!!!</Text>
      </View>

      <Animatable.View animation='fadeInUpBig' style={styles.footer}>

        <Text style={styles.text_footer}>USERNAME:</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="white" size={35} />
          <TextInput
            placeholder="your username"
            placeholderTextColor="white"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textinputChange(val)}/>
          {data.check_textinputChange ? 
            <Animatable.View animation='bounceIn'>
            <Feather name="check-circle" color="green" size={35} />
            </Animatable.View>
           : null}
        </View>

        <Text style={styles.text_footer}>PASSWORD:</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="white" size={35} />
          <TextInput
            placeholder="your password "
            placeholderTextColor="white"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}/>
          <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ?
              <Feather name="eye-off" color="grey" size={35} />:
               <Feather name="eye" color="grey" size={35} />}
          </TouchableOpacity>
        </View>

         <Text style={styles.text_footer}>CONFIRM PASSWORD:</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="white" size={35} />
          <TextInput
            placeholder="confirm password "
            placeholderTextColor="white"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}/>
          <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ?
              <Feather name="eye-off" color="grey" size={35} />:
               <Feather name="eye" color="grey" size={35} />}
          </TouchableOpacity>
        </View>

         
        <TouchableOpacity
          style={styles.inputbutton1}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 20, alignSelf: 'center', color: 'white' }}>
            SIGNUP
            <MaterialIcons name="navigate-next" color="white" size={20} />
          </Text>
        </TouchableOpacity>

       <TouchableOpacity
          style={styles.inputbutton2}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{ fontSize: 20, alignSelf: 'center', color: 'red' }}>
            LOGIN
            <MaterialIcons name="navigate-next" color="red" size={20} />
          </Text>
        </TouchableOpacity>

      </Animatable.View>
    </View>
  );
};
export default Signup;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F7FBF',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: '#3F7FBF',
  },
  footer: {
    flex: 3,
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    color: 'white',
  },
  text_header: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  text_footer: {
    fontSize: 18,
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    paddingBottom: 5,
    color: 'white',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    height: 40,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
  },
  inputbutton1: {
   // color: 'white',
    marginTop: 15,
    alignSelf: 'center',
    width: '70%',
    textAlign: 'center',
    backgroundColor: 'red',
    //backgroundColor: '#ED790C',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: 2,
    //justifyContent:'center',
    //textAlign:'center',
    //backgroundColor:'#00FF7F',
  },
   inputbutton2: {
   // color: 'red',
    marginTop: 15,
    alignSelf: 'center',
    width: '70%',
    textAlign: 'center',
    backgroundColor: 'white',
    //backgroundColor: '#ED790C',
    borderRadius: 10,
    padding: 5,
    marginBottom: 10,
    borderColor: 'red',
    borderWidth: 2,
    //justifyContent:'center',
    //textAlign:'center',
    //backgroundColor:'#00FF7F',
  },
  // input: {
  //  alignSelf:"center",
  //  height: 40,
  //  width:"70%",
  // margin: 12,
  // borderWidth: 1,
  // padding: 10,
  // borderColor:'purple',
  // },
});
