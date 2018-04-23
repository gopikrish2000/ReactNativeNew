import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, FlatList, StyleSheet, AppRegistry} from 'react-native';
import {firstActionCommand, secondActionCommand, FIRST_ACTION, SECOND_ACTION} from './actions'
import { combineReducers } from "redux";

currentState = {
    text1: "This is text1",
    text2: "This is text2"
};


function redoxChild1( action) {
    /*console.log("RedoxChild1 text param LINE1" + action.text);

    switch (action.type) {
        case FIRST_ACTION : {
            // action.param
            console.log("RedoxChild1 text param " + action.text);
            /!*return Object.assign({}, previousState, {
                text1: action.text
            });*!/
            return action.text;
        }
        default:
            return previousState;
    }*/
    return action.text;
}

function redoxChild2( action) {
    return action.text;

}

/*export default redoxReducerMain =  combineReducers({
    text1: redoxChild1(previ),
    text2: redoxChild2
});*/

export default function redoxReducerMain(previousState = currentState, action) {
    console.log("Redox Main text param ");


    return Object.assign({}, previousState,{   // only one Object.assign otherwise it will create nesting.
        text1: redoxChild1( action),
        text2: redoxChild2(action)
    });

    /*return combineReducers({
        text1: redoxChild1,
        text2: redoxChild2
    });*/

    /*switch (action.type) {       // This also works fine.
        case FIRST_ACTION : {
            // action.param
            console.log("RedoxChild1 text param " + action.text);
            return Object.assign({}, previousState, {
                text1: action.text
            });
        } case SECOND_ACTION : {
            // action.param
            return Object.assign({}, previousState, {
                text2: action.text
            });
        }
        default:
            return previousState;*/
    }
