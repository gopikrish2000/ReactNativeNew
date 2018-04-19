import React, {Component} from 'react';
import {Text, View, TextInput, Button, Alert, FlatList, StyleSheet, AppRegistry} from 'react-native';


export default class SecondReactClass extends Component {
    constructor(props) {
        super(props);
        this.state = {text: 'asdf'};
    }

    onPressButton(e) {
        Alert.alert("Button clicked with data " + this.state.text);

    }

    changeStateOfText() {
        this.setState((prev) => {
                return {text: prev.text + 'sdf'};
        });
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
                <Button onPress={(e) => this.onPressButton(e)} title="Button 1"/>

                <MyListView url="https://facebook.github.io/react-native/movies.json"/>
                <MyLongRunningTask text={this.state.text} changeFunc={this.changeStateOfText.bind(this)} />
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
        /*this.checkPromiseMethod(5).then(str =>  {
            Alert.alert(str + "");
        }).catch((reason => {
            Alert.alert(reason + " reject REASON");
        }));*/
    }

    onPressMyButton(e){
        console.log(this.props.text);
        this.props.changeFunc();
    }

    checkPromiseMethod(val){
        let a = 20;
        return new Promise((resolve, reject) => {
            if(val > 10){
                resolve("success value greater then 10");
            } else {
                reject("failure value should be greater then 10")
            }
        });
    }

    render(): * {
        return (
            <View>
                <Text> MyLongRunningTask with prop txt {this.props.text} </Text>
                <Button title="Change Parent state" onPress={(e) => this.onPressMyButton(e)} />
            </View>
        );
    }
}