import React, {Component} from 'react';
import {createStore} from 'redux';
import redoxReducerMain from './RedoxFirst'
import {firstActionCommand, secondActionCommand, FIRST_ACTION, SECOND_ACTION} from './actions'
import {Text, View, TextInput, Button, Alert, FlatList, StyleSheet, AppRegistry} from 'react-native';

export default class RedoxStoreExample extends Component {

    static navigationOptions = {
        title: 'RedoxStoreExample',
    };

    constructor(props){
        super(props);
        this.redoxDispatchExample();

    }

    redoxDispatchExample(){
        const store = createStore(redoxReducerMain, window.STATE_FROM_SERVER);


        console.log(store.getState());

        const unsubscribe = store.subscribe(() => {
            console.log("state in subscriber is ");
            console.log(store.getState());

            }
        );

        store.dispatch(firstActionCommand('Text1 Changed'));
        store.dispatch(secondActionCommand('Text2 Changed'));

        unsubscribe();
    }

    render(): * {
        return (
            <Text> First check</Text>
        );
    }
}
