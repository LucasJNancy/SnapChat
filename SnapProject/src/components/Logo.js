import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const Logo = () => {
    return (
         <View style={styles.container}>
             <Image style={{width: 40, height: 70}}
             source={require('../Img/logo.png')}
             />
             <Text style={styles.Logotext}>
                 voici mon test
             </Text>

         </View> 
    )
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#8e24aa",
      flexGrow: 1,
      alignItems:'center',
      justifyContent:'center'
    },

    Logotext: {

        marginVertical: 15,
        fontSize:18,
        color: 'rgb(226, 13, 254)'
    }
    
});

  export default Logo;