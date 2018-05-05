import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, Animated, Easing, TouchableHighlight } from 'react-native';

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
        this.animatedValue1 = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.animatedValue3 = new Animated.Value(0);
    }


    componentDidMount() {
        Animated.timing(this.state.firstAnim, {
            toValue: 100,
            easing: Easing.bounce,  // easing is a function pass with bind
            duration: 2000
        }).start();
    }

    animate () {
        this.animatedValue1.setValue(0);
        this.animatedValue2.setValue(0);
        this.animatedValue3.setValue(0);
        const createAnimation = function (value, duration, easing, delay = 0) {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration,
                    easing,
                    delay
                }
            )
        };
        Animated.parallel([
            createAnimation(this.animatedValue1, 2000, Easing.ease),
            createAnimation(this.animatedValue2, 1000, Easing.ease, 1000),
            createAnimation(this.animatedValue3, 1000, Easing.ease, 2000)
        ]).start()
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

        const scaleText = this.animatedValue1.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 2]
        });
        const spinText = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg']
        });
        const introButton = this.animatedValue3.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, 400]
        });


        return (
            <View>
                <Animated.View
                    style={[{width: this.state.firstAnim, height: this.state.firstAnim, backgroundColor: 'blue'}, position]}>

                </Animated.View>

                <Animated.View style={{width: 50, height: 50, backgroundColor: 'red', opacity: alphaInterpolate}}/>
                <Animated.View style={[{width: 50, height: 100, backgroundColor: 'green'}, rotate, scale ]}/>

                <Animated.View
                    style={{ transform: [{scale: scaleText}] }}>
                    <Text>Welcome</Text>
                </Animated.View>
                <Animated.View
                    style={{ marginTop: 20, transform: [{rotate: spinText}] }}>
                    <Text
                        style={{fontSize: 20}}>
                        to the App!
                    </Text>
                </Animated.View>
                <Animated.View
                    style={{top: introButton, position: 'absolute'}}>
                    <TouchableHighlight
                        onPress={this.animate.bind(this)}
                        >
                        <Text
                            style={{color: 'white', fontSize: 20}}>
                            Click Here To Start
                        </Text>
                    </TouchableHighlight>
                </Animated.View>
            </View>

        );
    }
};

class AnimationChild extends Component {

    constructor(props) {
        super(props);
    }
}