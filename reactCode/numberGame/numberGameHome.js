import React, {Component} from 'react';
import {Text, View,FlatList,Image, TextInput, Button, Alert, Animated, Easing,TouchableOpacity, TouchableHighlight} from 'react-native';


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
                if (previous.counDownIndex === 1) {
                    previous.dataList.forEach((item, index) => {
                        item["showImage"] = false;
                    });
                }
                return {counDownIndex: previous.counDownIndex - 1,
                dataList: previous.dataList };
            });
        }.bind(this), 1000);
    }

    fetchFromNetwork() {
        fetch("https://api.flickr.com/services/feeds/photos_public.gne?format=json")
            .then((response) => response.text())
            .then((responseText) => {
                const responseFinal = responseText.substring(15, responseText.lastIndexOf(")"));
                let itemList = JSON.parse(responseFinal).items.slice(0, 9);
                itemList.forEach( (item, index) => {
                    item.showImage = true;
                    item.index = index;
                });
                return itemList;
            })
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

    onPressItem(item) {
        let dataListAry = this.state.dataList;
        dataListAry.forEach((itemEach, index) => {
            if (itemEach.index === item.index) {
                itemEach.showImage = true;
            }
        });
        this.setState( (previous) => {
            return {dataList: dataListAry};
        });
        setTimeout(function () {
            let dataListAryNew = this.state.dataList;
            dataListAryNew.forEach((itemEach, index) => {
                if (itemEach.index === item.index) {
                    itemEach.showImage = false;
                }
            });
            this.setState( (previous) => {
                return {dataList: dataListAryNew};
            });
        }.bind(this), 2000);
    }

    render(): * {
        const pinkOpacity = this.state.counDownIndex <= 0 ? 0 : 1;
        return (
            <View style={{flex:1, flexDirection:'column', justifyContent:'flex-start'  }}>
                <View style={{opacity:pinkOpacity , flexDirection:'row', marginLeft:40, marginTop:20, marginBottom:30}}>
                    <Text>Game start in countdown of </Text>
                     <View style={{ backgroundColor:'blue', height: 40, width:40 , borderRadius:20, }}>
                        <View style={{flex:1, justifyContent: 'center'}}>
                            <Text style={{color:'red', fontSize:20, alignSelf:'center'}}> {this.state.counDownIndex} </Text>

                        </View>
                    </View>
                </View>

                <View style={{}}>
                    <FlatList contentContainerStyle ={{flexDirection:'row', flexWrap:'wrap',  margin: 6, justifyContent:'center'}}
                        data={this.state.dataList} keyExtractor={(item, index) => index + ""}
                              renderItem={({item}) => {
                                  const itemUrl = item.showImage ? item.media.m : ("https://dummyimage.com/600x400/db28db/fff&text=" + (item.index+1));
                                  return <View>
                                      <TouchableOpacity onPress={this.onPressItem.bind(this, item)}>
                                          <Image
                                              style={{width: 100, height: 100, margin: 6}}
                                              source={{uri: itemUrl}}
                                          />
                                      </TouchableOpacity>
                                  </View>

                              }}
                    />
                </View>
            </View>
        );
    }
};