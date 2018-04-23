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
        return (
            <View>
                <Animated.View style ={{width:this.state.firstAnim, height:this.state.firstAnim, backgroundColor: 'blue'}} />
                {/*<Text style={{opacity: this.state.firstAnim}}> firstAnimation </Text>*/}
            </View>
        );
    }
};

class AnimationChild extends Component {

    constructor(props) {
        super(props);
    }
}