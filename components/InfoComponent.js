import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import { ScrollView } from 'react-native';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import { View } from 'native-base';

function RenderHome(){
    return(
        <ScrollView>
            <Card>
                <Card.Cover source={require('../images/corona.jpg')}/>
                    <Card.Content>
                        <Title>Covid-19</Title>
                        <Paragraph>Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory 
                                        syndrome coronavirus 2 (SARS-CoV-2).
                        </Paragraph>
                        <Paragraph>
                                        It was first identified in December 2019 in Wuhan, China, and has since spread globally, resulting 
                                        in an ongoing pandemic. As of 28 May 2020, more than 5.69 million cases have been reported across 
                                        188 countries and territories, resulting in more than 355,000 deaths. More than 2.34 million people 
                                        have recovered.
                        </Paragraph>
                </Card.Content>
            </Card>

            <Subheading style={{color:"#E74C3C", 
                                fontSize:26,
                                padding:5,
                                fontWeight:"bold"}}>Public Service Announcement
            </Subheading>

            <Card>
                <Card.Cover source={require('../images/stay_home.jpg')}/>
                <Title>Stay Home</Title>
                <Paragraph>Stay home if you feel unwell. Make time with your families, Pray for recovery to normal life back.</Paragraph>
            </Card>
                
            <Card style={{paddingTop:20}}>
                <Card.Cover source = {require('../images/social_distancing.jpg')}/>
                <Title>KEEP a safe distance</Title>
                <Paragraph>If you are at any emergency situation and if you want to go out, Please make sure you maintain a social 
                                    distancing at public places.
                </Paragraph>
                </Card>
                
                <Card style={{paddingTop:20}}>
                    <Card.Cover source = {require('../images/hand_sanitizer.jpg')} />
                    <Title>WASH hands often</Title>
                    <Paragraph>It's always recommended to you to wash your hands often with soap or alchohol or sanitizers.</Paragraph>
                </Card>
                
                <Card style={{paddingTop:20}}>
                    <Card.Cover source = {require('../images/cough.jpg')} />
                    <Title>COVER your cough</Title>
                    <Paragraph>It's always recommended to you to wash your hands often with soap or alchohol or sanitizers.</Paragraph>
                </Card>
                
                <Card style={{paddingTop:20,paddingBottom:20}}>
                    <Card.Cover source = {require('../images/sick.jpg')} />
                    <Title>SICK? Call the helpline</Title>
                    <Paragraph>If you are sick without any delay call the helpline or visit your doctor first.</Paragraph>
                </Card>    
        </ScrollView>
    );
}

class InfoComponent extends Component{

    render(){
        return(
            <ScrollView stickyHeaderIndices = {[0]}>
                <View>
                    <HeaderComponent/>
                </View>
                <View>
                    <RenderHome/>
                </View>
            </ScrollView>
        );
    }
}

export default InfoComponent;