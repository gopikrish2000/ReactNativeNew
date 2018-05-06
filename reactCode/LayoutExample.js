import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, Animated, Easing, TouchableHighlight, StyleSheet} from 'react-native';


export default class LayoutExample extends Component {

    functionToExecute = 1;
    constructor(props) {
        super(props);
    }

    firstExample() {
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

    secondExample(){
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

    render(){
        if(this.functionToExecute === 1){
            return this.firstExample();
        } else if ( this.functionToExecute === 2){
            return this.secondExample();
        }
    }
};

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