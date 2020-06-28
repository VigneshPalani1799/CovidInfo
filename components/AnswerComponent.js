import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';

import { ANSWER } from '../shared/answer';


function RenderAnswer({data}){
    return(
        <ScrollView>
            <Card>
                <Card.Cover source={data.ans} style={{objectFit:"cover"}}/>
                <Card.Content>
                <Paragraph>{data.desc}</Paragraph>
                </Card.Content>
            </Card>            
        </ScrollView>
    )
}

class AnswerComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            data:ANSWER
        }
    }

    static navigationOptions = {
        title: 'CovidInfo'
    }

    render(){
        const {itemID} = this.props.route.params;
        return(
            <ScrollView style={{backgroundColor:"#fff"}}>
                <View>
                    <RenderAnswer data={this.state.data[itemID]}/>
                </View>
            </ScrollView>
        )
    }
}

export default AnswerComponent;