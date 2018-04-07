import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, StyleSheet, AppRegistry} from 'react-native';


export default class SecondReactClass extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    onPressButton() {
        Alert.alert("Button clicked");
    }

    render(): * {
        return (
            <View>
                <TextInput style={{height: 50}} placeholder=" This is text input" onChangeText={(txt) => {
                    this.setState((previous) => {
                        return (this.state.text: txt);
                    });
                    /*this.setState({txt});*/
                    /*this.state = {text: txt};*/
                }}> </TextInput>

                <Text>
                    The text is {this.state.text}
                </Text>
                <Button onPress={this.onPressButton} title="Button 1"/>
            </View>
        );
    }
};