import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, Animated, Easing, TouchableHighlight} from 'react-native';


export default class NumberGameHome extends Component {

    constructor(props) {
        super(props);
        this.state = {counDownIndex: 15};
    }

    componentDidMount(){
        this.intervalId = setInterval(function(){
            if(this.state.counDownIndex < 1) {
                clearInterval(this.intervalId);
                return;
            }
            this.setState(previous => {
                return {counDownIndex: previous.counDownIndex - 1};
            });
        }.bind(this), 1000);
    }

    render(): * {
        const pinkOpacity = this.state.counDownIndex <= 0 ? 0 : 1;
        return (
            <View style={{height:400, width:600}}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <Text>Game start in countdown of </Text>
                    { <View style={{opacity:pinkOpacity , backgroundColor:'blue', height: 40, width:40 , borderRadius:20, }}>
                        <View style={{flex:1, justifyContent: 'center'}}>
                            <Text style={{color:'red', fontSize:20, alignSelf:'center'}}> {this.state.counDownIndex} </Text>
                        </View>
                    </View>}
                </View>
            </View>
        );
    }
};