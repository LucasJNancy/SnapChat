import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';


const Login = () => {
    return (
          <View>
  
          <Text style={styles.body}>Login</Text>
  
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
    
});

  
  export default Login;