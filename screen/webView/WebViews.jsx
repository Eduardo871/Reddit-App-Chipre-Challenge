import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViews = ({route}) => {
    const [loading, setLading] = React.useState(false)
    const url = route.params.url
  
    return (
        <WebView 
          style={styles.container}
          source={{ uri: url }}
          onLoad={()=>{}}
          onLoadEnd={()=>{}}
        />
  
    )
}

export default WebViews;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingRight: 100
    },
   
  });