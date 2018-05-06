import React, {Component} from 'react';
import {Text, View,Dimensions, TextInput, Button, Alert, Animated, Easing, TouchableHighlight, StyleSheet} from 'react-native';


export default class LayoutExample extends Component {

    functionToExecute = 3;
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

    secondExample(){ // align 3 elements middle is center & 1 is left of 2 ; 3 is right of 2 ... ;; Each divide into multiple flexboxes n align it.
        return (
            <View style={styles.container}>
                <View style={styles.component1}>
                    <Text>Right</Text>
                </View>
                <View style={styles.component2}>
                    <Text style={{ }}>Center Component1</Text>
                    <Text style={{ marginTop: 30 }}>Center Component2</Text>
                    <Text style={{ }}>Center Component3</Text>
                </View>
                <View style={styles.component3}>
                    <Text> component3 </Text>
                </View>
            </View>
        );
    }


    thirdExample(){ // align 4 elements across 4 corners topLeft , topRight , BottomLeft , BottomRight ;
                    // for this the parent Width, Height should be given & position: relative
        lWidth = Dimensions.get('window').width;
        lHeight = Dimensions.get('window').height - 100;

        return (
            <View style={{position:'relative', width:lWidth, height: lHeight}}>
                <View style={{position: 'absolute', top: 0 , left: 0}}>
                    <Text>Right</Text>
                </View>
                <View style={{position: 'absolute', top: 0 , right: 0}}>
                    <Text style={{ }}>Center Component1</Text>
                    <Text style={{ marginTop: 30 }}>Center Component2</Text>
                    <Text style={{ }}>Center Component3</Text>
                </View>
                <View style={{position: 'absolute', bottom: 0 , left: 0}}>
                    <Text> component3 </Text>
                </View>
                <View style={{position: 'absolute', bottom: 0 , right: 0}}>
                    <Text> component4 </Text>
                </View>
            </View>
        );
    }

    render(){
        if(this.functionToExecute === 1){
            return this.firstExample();
        } else if ( this.functionToExecute === 2){
            return this.secondExample();
        } else if ( this.functionToExecute === 3){
            return this.thirdExample();
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