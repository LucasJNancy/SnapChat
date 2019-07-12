import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Form from '../components/Form';
import Logo from '../components/Logo';
const Signup = () => {
    return (
          <View style={styles.container}>
  
          <Logo />
          <Form type='Signup'/>
          <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Deja un compte ?</Text>
                <Text style={styles.signupButton}>Connectez vous!</Text>
          </View>
  
          </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#8e24aa",
      flex: 1,
      alignItems:'center',
      justifyContent:'center'
    },

    signupTextCont : {
        flexGrow: 1,
        alignItems:'flex-end',
        justifyContent:'center',
        marginVertical:16,
        flexDirection:'row',
        margin: 30,
    },

    signupText: {
        color:'rgba(255,255,255,0.7)',
        fontSize:16,

    },

    signupButton: {
        color:'white',
        fontSize:16,
        fontWeight:'500',
    }
    
});

  
  export default Signup;