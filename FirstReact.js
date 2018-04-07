import React, {Component} from 'react';
import {Text, View, StyleSheet, AppRegistry} from 'react-native';

export default class FirstClass extends Component {
    render() {
        return (
            <View>
                <Text style={{color: '#FF0000', backgroundColor: '#00FF00'}}> This is my first text </Text>
                <AnotherClass param='firstParam'/>
                <AnotherClass param='secondParam'/>
                <Blink blinkTextToShow='This is blink text' />
            </View>
        );
    }
}


class AnotherClass extends Component {
    render(): * {
        return (

            <Text style={styles.stextStyle}> This is another Class text {this.props.param}  </Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowing: true};
        setInterval(() => {
            this.setState(previousState => {
                return {isShowing: !previousState.isShowing}
            })
        }, 1000);
    }

    render(): * {
        let blinkText = this.state.isShowing ? this.props.blinkTextToShow : "";
        return (
            < Text style={[styles.stextStyle, styles.sfontStyle]}>
                {blinkText}
            </Text>
        );
    }
}

var styles = StyleSheet.create({
    stextStyle : {
        color: '#FF0000',
        backgroundColor: '#00FF00'
    },
    sfontStyle : {
        fontSize: 35
    },
    sBgStyle : {
        backgroundColor: '#0000FF'
    }
});