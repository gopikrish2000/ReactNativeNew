import {AppRegistry} from 'react-native';
import App from './App';
import FirstReact from './FirstReact';
import SecondReactClass from './SecondReact';
import {StackNavigator} from "react-navigation";
import {Component} from "react";
import RedoxStoreExample from './reactCode/RedoxStore';
import FirstAnimation from "./reactCode/FirstAnimation";

const navigationConst = StackNavigator({
        RedoxFirst : {screen: RedoxStoreExample},
        Home: {screen: SecondReactClass},
        FirstAnimation: {screen: FirstAnimation},
        Profile: {screen: App}
    },
    {
        initialRouteName: 'FirstAnimation'
    });



AppRegistry.registerComponent('untitled', () => navigationConst);
