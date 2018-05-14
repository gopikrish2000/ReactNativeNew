import React, {Component} from 'react';
import {Text, View,FlatList,Image, TextInput, Button, Alert, Animated, Easing,TouchableOpacity, TouchableHighlight} from 'react-native';


export default class NumberGameEnd extends Component {

    constructor(props) {
        super(props);
    }

    playAgain() {
       this.props.navigation.navigate('NumberGameHome');
    }


    render(): * {
        return (
            <View>
                <Button onPress={this.playAgain.bind(this)} title="PlayAgain" />
                <Text>Congratulations, You won the game in {this.props.navigation.state.params.attemptCount} moves</Text>
                {/*{this.props.attemptCount}*/}
            </View>

        );
    }
}