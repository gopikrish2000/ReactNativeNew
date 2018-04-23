import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, Animated} from 'react-native';

export default class FirstAnimation extends Component {
    static navigationOptions = {
        title: 'FirstAnimation',
    };

    constructor(props) {
        super(props);
        this.state = {
            firstAnim: new Animated.Value(10),
            secondAnim: new Animated.Value(1)
        };
    }


    componentDidMount() {
        Animated.timing(this.state.firstAnim, {
            toValue: 100,
            duration: 2000
        }).start();
    }


    render(): * {
        const alphaInterpolate = this.state.firstAnim.interpolate({
            inputRange: [10, 50, 100],
            outputRange: [0.1, 0.5, 1]
        });

        return (
            <View>
                <Animated.View
                    style={{width: this.state.firstAnim, height: this.state.firstAnim, backgroundColor: 'blue'}}>
                </Animated.View>

                <Animated.View style={{width:50, height:50,backgroundColor: 'red', opacity: alphaInterpolate}} />
            </View>
        );
    }
};

class AnimationChild extends Component {

    constructor(props) {
        super(props);
    }
}