import React, { Component } from 'react';
import { Header, Body, Title } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView,StyleSheet, View } from 'react-native';

class HeaderComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:true,
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({loading:false});
    }


    render() {
        if(this.state.loading){
            return(
                <View></View>
            );
        }
        return (
            <ScrollView>
                <Header style={styles.header}>
                    <Body>
                        <Title style={{fontSize:40}}>
                            CovidInfo
                        </Title>
                    </Body>
                </Header>
            </ScrollView>
        );
    }
}

export default HeaderComponent;

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#6979F5',
    },
})