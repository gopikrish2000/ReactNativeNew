import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, Animated, Easing, TouchableHighlight} from 'react-native';


export default class NumberGameHome extends Component {

    constructor(props) {
        super(props);
    }

    render(): * {
        return (
            <View style={{height:300, backgroundColor: 'black'  }}>
                <View style={{
                    flex: 1,
                    display:'flex',
                    flexDirection: 'row',
                    alignItems:'center',
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    {/*to align in center use marginLeft n right to auto */}
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue', marginLeft :'auto' , marginRight: 'auto' }}/>
                    {/*to align in end use margin: auto*/}
                    <View style={{width: 50, height: 50, backgroundColor: 'red', margin :'auto' }}/>

                </View>
            </View>

        );
    }
};