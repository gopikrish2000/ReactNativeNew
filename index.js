import {AppRegistry} from 'react-native';
import App from './App';
import FirstReact from './FirstReact';
import SecondReactClass from './SecondReact';
import {StackNavigator} from "react-navigation";
import {Component} from "react";
import {RedoxStoreExample} from "./reactCode/RedoxStore";

const navigationConst = StackNavigator({
        // RedoxFirst : {screen: RedoxStoreExample},
        Home: {screen: SecondReactClass},
        Profile: {screen: App}
    },
    {
        initialRouteName: 'Home'
    });


AppRegistry.registerComponent('untitled', () => navigationConst);
