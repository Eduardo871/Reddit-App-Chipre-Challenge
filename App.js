// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screen/welcome/Welcome';
import Principal from './screen/principal/Principal';
import WebViews from './screen/webView/WebViews';

export default function App() {

  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
          />
          <Stack.Screen name="Principal" component={Principal} />
          <Stack.Screen name="WebView" component={WebViews} />
        </Stack.Navigator>

      </NavigationContainer>
  );
}
