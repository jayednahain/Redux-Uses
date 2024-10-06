import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OptView, LoginWithPhone, LoginVIew, HomeView } from './Views'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './Redux/store';


const Stack = createStackNavigator();


export default function AuthInfo() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginVIew">
          <Stack.Screen name="LoginVIew" component={LoginVIew} />
          <Stack.Screen name="LoginWithPhone" component={LoginWithPhone} />
          <Stack.Screen name="OptView" component={OptView} />
          {/* <Stack.Screen name="Registration" component={Registration} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({})