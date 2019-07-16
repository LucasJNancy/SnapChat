import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component{
  render() {
    return (
         <View style={styles.container}>
             <TextInput style={styles.inputBox} 
             underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder='Email'
             placeholderTextColor ="white" />

            <TextInput style={styles.inputBox} 
             underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder='Password'
             placeholderTextColor ="white"
             secureTextEntry={true} />

             <TouchableOpacity style={styles.button}>
                 <Text style={styles.buttonText}>Login</Text>
             </TouchableOpacity>
         </View> 
    );
  }

  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#8e24aa",
      flexGrow: 1,
      justifyContent:'center',
    },
    inputBox: {
        width: 300,
        backgroundColor:'rgba(0.12, 0.60, 0.00, 0.14)' ,
        borderRadius: 25,
        fontSize: 16,
        color:'#ffffff',
        marginVertical: 10,
        paddingHorizontal: 20,
    },

    button: {
        backgroundColor:'#5c007a' ,
        borderRadius: 25,
        width:300,
        paddingHorizontal:105,
        marginVertical: 10,
        paddingVertical:16,
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'white',
        textAlign:'center',
    }
}); 