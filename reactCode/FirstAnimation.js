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

        const position= {
            transform: [
                {
                    translateX: this.state.firstAnim.interpolate({
                        inputRange: [10, 50, 100],
                        outputRange: [100, 200, 100]
                    })
                },
                {
                    translateY: this.state.firstAnim.interpolate({
                        inputRange: [10, 50, 100],
                        outputRange: [15, 20, 15]
                    })
                }
            ]
        };

        const rotate = {
            transform: [
                {
                    rotateX: this.state.firstAnim.interpolate({
                        inputRange: [10, 50, 100],
                        outputRange: ['0deg', '180deg', '0deg']
                    })
                }
            ]
        };

        const scale = {
            transform: [
                {
                    scaleX: this.state.firstAnim.interpolate({
                        inputRange: [10, 50, 100],
                        outputRange: [1,0.5,1]
                    })
                },
                {
                    scaleY: this.state.firstAnim.interpolate({
                        inputRange: [10, 50, 100],
                        outputRange: [1,0.5,1]
                    })
                }
            ]
        };


        return (
            <View>
                <Animated.View
                    style={[{width: this.state.firstAnim, height: this.state.firstAnim, backgroundColor: 'blue'}, position]}>

                </Animated.View>

                <Animated.View style={{width: 50, height: 50, backgroundColor: 'red', opacity: alphaInterpolate}}/>
                <Animated.View style={[{width: 50, height: 100, backgroundColor: 'green'}, rotate, scale ]}/>
            </View>

        );
    }
};

class AnimationChild extends Component {

    constructor(props) {
        super(props);
    }
}