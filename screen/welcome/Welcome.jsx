import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image  } from 'react-native';
import redditLogo from '../../assets/redditLogo.png'


const Welcome = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.btn}
         onPress = {()=>{ navigation.navigate('Principal') }}
        >
          <Image 
          style={styles.img}
          source={redditLogo}
          />
          <Text style={styles.txt}>Welcome to reddit fake</Text>
        </TouchableOpacity>
      </View>
    )
}

export default Welcome;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFCFC',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 260,
    height: 260
  },
  txt: {
    fontSize: 28,
    fontWeight: "bold",
    color:'#E36900',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});


// <TouchableOpacity 
        // style={styles.btn}
        // onPress = {()=>{ navigation.navigate('Principal') }}
//         >
//             <Text>Welcome</Text>
//         </TouchableOpacity>