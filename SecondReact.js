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
                    /*this.setState((previous) => {
                        return (this.state.text: txt);
                    });*/
                    this.setState( {text: txt});

                    /*this.setState({txt});*/
                    /*this.state = {text: txt};*/
                }}> </TextInput>

                <Text>
                    The text is {this.state.text}
                </Text>
                <Button onPress={this.onPressButton} title="Button 1"/>

                <MyListView url="https://facebook.github.io/react-native/movies.json"/>
                <MyLongRunningTask text={this.state.text} />
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
        this.fetchFromNetwork()
    }

    componentDidMount() {
        console.log("ComponentDidMount MyLongRunningTask");
    }

    componentWillUnmount() {
        console.log("ComponentDidUNMount MyLongRunningTask");
    }

    componentDidUpdate() {
        console.log("ComponentDidUpdate MyLongRunningTask");
    }

    /*componentWillMount() {   // deprecated
        console.log("ComponentWillMount MyLongRunningTask");
    }*/



    /* componentWillUpdate() {   // deprecated
         console.log("ComponentWillUpdate MyLongRunningTask");
     }*/

    fetchFromNetwork() {
        fetch(this.props.url).then((response) => response.json()).then((jsonObj) => jsonObj["movies"]).then((json) => {
            // console.log(" json is " + json);
            this.setState({
                dataList: json
            }, () => {

            });
        }).catch((exception) => {
            console.error(exception);
        });
    }

    render(): * {
        return (
            <View>
                <Text> Sample view </Text>

                <FlatList data={this.state.dataList} keyExtractor={(item, index) => index + ""}
                          renderItem={({item}) => <Text> movie tilte is {item.title} , release year
                              is {item.releaseYear} </Text>}
                />

            </View>
        );
    }
}

/* lifecycle CREATION order is  componentWillMount -> Render -> componentDidMount -> componentWillUnmount ( when destroyed)

*  lifecycle UPDATION order is  shouldComponentUpdate -> componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate -> Render -> componentDidUpdate
* */
class MyLongRunningTask extends Component {

    constructor(props) {
        super(props);
        /*setTimeout(() => {
            console.log("Time out called")
        }, 500);*/
    }

    render(): * {
        return (
            <Text> MyLongRunningTask with prop txt {this.props.text} </Text>
        );
    }
}