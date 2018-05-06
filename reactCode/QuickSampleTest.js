import React, {Component} from 'react';
import {Text, View,StyleSheet, TextInput, Button, Alert, Animated, Easing, TouchableHighlight} from 'react-native';


class QuickSampleTest extends Component {

    render(): * {
        return (
            <View style={styles.container}>
                <View style={styles.component1}>
                    <Text>Right</Text>
                </View>
                <View style={styles.component2}>
                    <Text style={{ textAlign:'center' }}>Center Component</Text>
                </View>
                <View style={styles.component3}>
                    <Text> component3 </Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        flex:1,
        marginTop:60
    },
    component1: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height:80
    },
    component2: {
        flex:1,
        height:80,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent:'center'
    },
    component3: {
        flex:1,
        height:80,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'flex-end'
    }
});

export default QuickSampleTest;