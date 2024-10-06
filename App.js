import { StyleSheet, Text, View } from 'react-native'

import React, { startTransition } from 'react'
import M4App from './App/Module4/M4App'
// import { combineReducers, createStore } from 'redux'


export default function App() {
    return (
        <View>
            {/* <Text>App</Text> */}
            <M4App/>
        </View>
    )
}

const styles = StyleSheet.create({})