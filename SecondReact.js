import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, FlatList, StyleSheet, AppRegistry} from 'react-native';


export default class SecondReactClass extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    onPressButton() {
        Alert.alert("Button clicked");
    }

    render(): * {
        return (
            <View>
                <TextInput style={{height: 50}} placeholder=" This is text input" onChangeText={(txt) => {
                    this.setState((previous) => {
                        return (this.state.text: txt);
                    });
                    /*this.setState({txt});*/
                    /*this.state = {text: txt};*/
                }}> </TextInput>

                <Text>
                    The text is {this.state.text}
                </Text>
                <Button onPress={this.onPressButton} title="Button 1"/>

                <MyListView abc="2"/>
            </View>
        );
    }
};

/* <FetchFromNetworkClass url = "https://facebook.github.io/react-native/movies.json" />*/
class FetchFromNetworkClass extends Component {
    constructor(props) {
        super(props);
        this.state = {jsonResponse: ""};
        this.fetchFromNetwork();
    }

    fetchFromNetwork() {
        fetch(this.props.url).then((response) => response.json()).then((jsonObj) => JSON.stringify(jsonObj)).then((json) => {
            console.log(" json is " + json);
            this.setState({
                jsonResponse: json
            }, () => {

            });
        }).catch((exception) => {
            console.error(exception);
        });
    }

    render(): * {
        return (
            <Text> Json response is {this.state.jsonResponse} </Text>
        );
    }
}

class MyListView extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true, dataList: []};
    }

    render(): * {
        return (
            <View>
                <Text> Sample view </Text>

                <FlatList data={[{ "name": "gopi", "age": 20}, {
                    "name": "krishna",
                    "age": 24
                }, { "name": "abc", "age": 30}
                ]} keyExtractor = {(item, index) => item.name}
                          renderItem={({item}) => <Text> name is {item.name} , age is {item.age} </Text>}
                />

            </View>
        );
    }
}