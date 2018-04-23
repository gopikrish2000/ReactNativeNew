import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, FlatList, StyleSheet, AppRegistry} from 'react-native';
import {firstActionCommand, secondActionCommand, FIRST_ACTION, SECOND_ACTION} from './actions'
import { combineReducers } from "redux";

currentState = {
    text1: "This is text1",
    text2: "This is text2"
};


function redoxChild1(previousState = '', action) {
    console.log("RedoxChild1 text param LINE1" + action.text);

    switch (action.type) {
        case FIRST_ACTION : {
            // action.param
            console.log("RedoxChild1 text param " + action.text);
            return Object.assign({}, previousState, {
                text1: action.text
            });
        }
        default:
            return previousState;
    }
}

function redoxChild2(previousState = '', action) {
    switch (action.type) {
        case SECOND_ACTION : {
            // action.param
            return Object.assign({}, previousState, {
                text2: action.text
            });
        }
        default:
            return previousState;
    }
}

export default function redoxReducerMain(previousState = currentState, action) {
    console.log("Redox Main text param ");
    /*return {
        text1: redoxChild1(previousState, action),
        text2: redoxChild2(previousState, action)
    }*/
    /*return combineReducers({
        text1: redoxChild1,
        text2: redoxChild2
    });*/

    switch (action.type) {
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
            return previousState;
    }



}