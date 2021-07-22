import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';


const WebView = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity 
            style={styles.btn}
            onPress = {()=>{ navigation.navigate('Principal') }}
            >
                <Text>WebView</Text>
            </TouchableOpacity>
        </View>
    )
}

export default WebView;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    nav: {
      position: 'absolute',
      height: 60,
      width: '100%',
      backgroundColor: '#fff',
      bottom: 10,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: 'blue',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    btn: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });