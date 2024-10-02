import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { fetchDataMiddleWare } from './CustomMiddleWare';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

//reducer ------------------------------------------------------------------------------
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todos/todoAdd":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        title: action.payload
                    }
                ]
            }
        case "todos/todoLoaded":
            return {
                ...state,
                todos: [
                    ...state.todos, ...action.payload
                ]
            }
        default:
            return state
    }
}

const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case "user/setUser":
            return { ...state, user: action.payload };
        default:
            return state;
    }
};


//store ------------------------------------------------------------------------------
const rootReducer = combineReducers({todos: todoReducer,users: userReducer})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(fetchDataMiddleWare)
})

//subscribe to state changes
store.subscribe(() => {
    console.log(store.getState())
})


store.dispatch({
    type: "todos/fetchTodos",
})

export default function L2ThunkFunction() {
    return (
        <View>
            <Text>L2ThunkFunction</Text>
        </View>
    )
}

const styles = StyleSheet.create({})