import React, {Component} from 'react';
import axios from 'axios';
import { ScrollView,Text, View,StyleSheet, Linking, Platform} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo'
import { Button, Card, Title, Paragraph, Badge, Banner } from 'react-native-paper';
import { ListItem } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AnimatedLoader from "react-native-animated-loader";
import BannerComponent from './BannerComponent';


function RenderNews({newsData}){
    if(newsData!==null){
        return(
            newsData.map((news,i)=>{
                return(
                    <Card>
                        <Card.Cover source={{uri:news.urlToImage}}/>
                        <Card.Content>
                            <Title>{news.title}</Title>
                            <Paragraph>{news.description}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button 
                                onPress={()=>Linking.openURL(news.url)}
                                style={{textAlign:"right"}}
                            >
                                View More
                            </Button>
                        </Card.Actions>
                        <ListItem
                            key={i}
                            bottomDivider
                        />
                    </Card>
                );
            })
        );
    }
    else
        return(
            <View></View>
        );
}

function RenderSpinner({fetched,error}){
    if(fetched===false && error===false){
        return(
            <AnimatedLoader
                visible={true}
                overlayColor="#fff"
                animationStyle={styles.lottie}
                speed={2}
            />
        );
    }
    else if(error===true)
        return(
            <Text style={styles.error}>Please connect to internet</Text>
        )
    else
        return(<></>);
}

function RenderStatus(){
    if(!useNetInfo().isConnected)
        return(
            <BannerComponent/>
        )
    else
        return(
            <ScrollView></ScrollView>
        );
}

class NewsComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            newsData:[],
            error:false,
            fetched:false,
            url:'http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f9a846f8e8df4dc1904d9d736262a62c',
        };
        this.keyExtractor = this.keyExtractor.bind(this);
    }

    keyExtractor =(item,index)=>index.toString();

    componentDidMount(){
        axios
        .get(this.state.url)
        .then(result=>{
            this.setState({newsData:result.data.articles,
                fetched:true
            })
        })
        .catch(error=>this.setState({error:true}));

    }

    render(){
        return(
            <ScrollView >
                <RenderSpinner 
                    fetched={this.state.fetched}
                    error={this.state.error}
                />
                <RenderStatus/>
                <Text style={styles.heading}>Trending Today</Text>
                <RenderNews 
                    newsData={this.state.newsData}
                />
            </ScrollView>
        );
    }
}

export default NewsComponent;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    lottie:{
        width: 100,
        height: 100
    },
    error:{
        fontSize:30,
        color:"red",
        flex:1,
        flexDirection:'column',
        textAlign:'center',
    },
    heading:{
        fontSize:wp('8%'),
        margin:wp('2%'),
        padding:wp('3%'),
    }
});