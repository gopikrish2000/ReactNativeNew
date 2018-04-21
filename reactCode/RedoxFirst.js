import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, FlatList, StyleSheet, AppRegistry} from 'react-native';
import {firstActionCommand, secondActionCommand, FIRST_ACTION, SECOND_ACTION} from './actions'

currentState = {
    text1: "This is text1",
    text2: "This is text2"
};


function redoxChild1(previousState, action) {
    switch (action) {
        case FIRST_ACTION : {
            // action.param
            return Object.assign({}, previousState, {
                text1: action.param
            });
            break;
        }
    }
}

function redoxChild2(previousState, action) {
    switch (action) {
        case SECOND_ACTION : {
            // action.param
            return Object.assign({}, previousState, {
                text2: action.param
            });
            break;
        }
    }
}

export default function redoxReducerMain(previousState = currentState, action) {
    return {
        text1: redoxChild1(previousState, action),
        text2: redoxChild2(previousState, action)
    }
}