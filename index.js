import {AppRegistry} from 'react-native';
import App from './App';
import FirstReact from './FirstReact';
import SecondReactClass from './SecondReact';
import {StackNavigator} from "react-navigation";
import {Component} from "react";
import RedoxStoreExample from './reactCode/RedoxStore';
import FirstAnimation from "./reactCode/FirstAnimation";
import NumberGameHome from "./reactCode/numberGame/numberGameHome";
import QuickSampleTest from "./reactCode/QuickSampleTest";
import LayoutExample from "./reactCode/LayoutExample";
import NumberGameEnd from "./reactCode/numberGame/numberGameEnd";
import TouchHandling from "./reactCode/concepts/TouchHandling";


const navigationConst = StackNavigator({
        RedoxFirst : {screen: RedoxStoreExample},
        Home: {screen: SecondReactClass},
        FirstAnimation: {screen: FirstAnimation},
        NumberGameHome: {screen: NumberGameHome},
        QuickSampleTest: {screen: QuickSampleTest},
        LayoutExample: {screen: LayoutExample},
        Profile: {screen: App},
        NumberGameEnd: {screen: NumberGameEnd},
        TouchHandling: {screen: TouchHandling}
    },
    {
        initialRouteName: 'TouchHandling'
    });

console.disableYellowBox = true;
AppRegistry.registerComponent('untitled', () => navigationConst);
