import React, {Component} from 'react';
import {Text, View,FlatList, TextInput, Button, Alert, Animated, Easing, TouchableHighlight} from 'react-native';


export default class NumberGameHome extends Component {

    constructor(props) {
        super(props);
        this.state = {counDownIndex: 15, dataList:[]};
    }

    componentDidMount(){
        this.fetchFromNetwork();
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

    fetchFromNetwork() {
        fetch("https://api.flickr.com/services/feeds/photos_public.gne?format=json")
            .then((response) => response.text())
            .then((responseText) => {
                // const match = responseText.match(/jsonFlickrFeed\((.*)\);/);
                // if (! match) throw new Error('invalid JSONP response');
                const responseFinal = responseText.substring(15, responseText.lastIndexOf(")"));
                return JSON.parse(responseFinal).items;
            })
            //.then((response) => response.json()).then((jsonObj) => jsonObj["movies"])
            .then((json) => {
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
        const pinkOpacity = this.state.counDownIndex <= 0 ? 0 : 1;
        return (
            <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start'  }}>
                <View style={{opacity:pinkOpacity ,flex:1, flexDirection:'row', marginLeft:40, marginTop:20, marginBottom:30}}>
                    <Text>Game start in countdown of </Text>
                    { <View style={{ backgroundColor:'blue', height: 40, width:40 , borderRadius:20, }}>
                        <View style={{flex:1, justifyContent: 'center'}}>
                            <Text style={{color:'red', fontSize:20, alignSelf:'center'}}> {this.state.counDownIndex} </Text>
                        </View>
                    </View>}
                </View>

                <View>
                    <FlatList data={this.state.dataList} keyExtractor={(item, index) => index + ""}
                              renderItem={({item}) => <Text> item tilte is {item.title} , link year is {item.link} </Text>}
                    />

                </View>
            </View>
        );
    }
};