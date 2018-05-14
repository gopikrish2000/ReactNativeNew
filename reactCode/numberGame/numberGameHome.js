import React, {Component} from 'react';
import {Text, View,FlatList,Image, TextInput, Button, Alert, Animated, Easing,TouchableOpacity, TouchableHighlight} from 'react-native';


export default class NumberGameHome extends Component {

    constructor(props) {
        super(props);
        this.state = {counDownIndex: 15, dataList:[], noOfAttempts:0, noOfCorrect:0, currentItem:{}};
        this.choosenNumbersAry = [0,1,2,3,4,5,6,7,8];
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
            if (this.state.counDownIndex === 1) {
                this.gameLogicHandler();
            }
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
        const isCorrect = this.state.currentItem.index === item.index ? 1 : 0;
        this.setState( (previous) => {
            return {dataList: dataListAry, noOfAttempts: previous.noOfAttempts +1 ,
            noOfCorrect: previous.noOfCorrect + isCorrect };
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
        if(isCorrect === 1){
            this.gameLogicHandler();
        }
    }

    gameLogicHandler() {
        if(this.choosenNumbersAry.length <=0 ) {
            alert("game over");
            return;
        }
        let numIndex = Math.floor((Math.random() * (this.choosenNumbersAry.length - 1)));
        let value = this.choosenNumbersAry[numIndex];
        if (numIndex > -1) {
            this.choosenNumbersAry.splice(numIndex, 1);
        }
        let choosenElem = this.state.dataList[value];
        this.setState( (previous) => {
            return {currentItem: choosenElem};
        })
    }



    render(): * {
        const pinkOpacity = this.state.counDownIndex <= 0 ? 0 : 1;
        var currentItemUrl = "";
        try{
            currentItemUrl = this.state.currentItem.media.m  }
        catch (e) {}
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

                <View style={{opacity:pinkOpacity===0?1:0 ,flexDirection: 'row', marginBottom:30, marginLeft:40, marginRight:40}}>
                    <Text>Moves {this.state.noOfAttempts} </Text>
                    {/*<Text style={{ marginLeft:'auto', marginRight:'auto'}}>Middle</Text>*/}
                    <Image
                        style={{width: 100, height: 100, marginLeft:'auto', marginRight:'auto'}}
                        source={{uri: currentItemUrl}}
                    />
                    <Text style={{color:'green', margin:'auto'}}>Correct {this.state.noOfCorrect} </Text>
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