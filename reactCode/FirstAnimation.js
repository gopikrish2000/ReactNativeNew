import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import * as Animated from "react-native";

export default class FirstAnimation extends Component {
    static navigationOptions = {
        title: 'FirstAnimation',
    };


    constructor(props) {
        super(props);
        this.state = {
            firstAnim: new Animated.valueOf(0),
            secondAnim: new Animated.valueOf(1)
        };
    }

    componentDidMount() {
        Animation.timing(this.state.firstAnim, {
            toValue: 1,
            duration: 2000
        }).start();
    }


    render(): * {
        return (
            <View>
                <Text style={{opacity: this.state.firstAnim}}> firstAnimation </Text>
            </View>
        );
    }
};