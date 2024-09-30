import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { configureStore ,combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit'
import { delayMiddleware } from './L1CustomMiddleWare'

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
    reducer:rootReducer
},applyMiddleware(delayMiddleware));

// const store = createStore(todoReducer,applyMiddleware(delayMiddleware))


//subscribe to state changes
store.subscribe(() => {
    console.log(store.getState())
})


// store.dispatch({
//     type: "todos/todoAdd",
//     payload:"learn with lex"
// })

// store.dispatch({
//     type: "todos/todoLoaded",
//     payload:[{"title": "learnx"},{"title": " lex"},{"title": "learn "}]
// })


store.dispatch({
    type: "todos/todosAddeds",
    // payload:[{"title": "learnx"},{"title": " lex"},{"title": "learn "}]
})




export default function L1IntroAsync() {
    return (
        <View>
            <Text>L1IntroAsync</Text>
        </View>
    )
}

const styles = StyleSheet.create({})