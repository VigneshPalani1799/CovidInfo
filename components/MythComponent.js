import React, {Component} from 'react';
import { ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';
import HeaderComponent from './HeaderComponent';
import { ListItem } from 'react-native-elements';

import {MYTHS} from '../shared/myths'
import { Card } from 'native-base';




class MythComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:MYTHS
        }
    }

    static navigationOptions = {
        title:'Myth'
    }

    render(){
        const renderMyths=({item,index})=>{
            
            return(
                <ListItem 
                    key = {item.id}
                    title = {item.myth}
                    chevron={true}
                    onPress = {()=>{this.props.navigation.navigate('Answer',{
                        itemID:index,
                    });
                }}
                    bottomDivider
                />
            )
        }
        return(
            <ScrollView >
                <ScrollView>
                    <Card>
                        <Text style={styles.heading}>Frequently asked questions</Text>
                    </Card>
                </ScrollView>
                <View>
                    <FlatList 
                        data={this.state.data}
                        renderItem = {renderMyths}
                        navigate = {this.props.navigation}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    heading:{
        fontSize:26,
        color:'#01579B',
        paddingTop:15,
        paddingLeft:10,
        paddingBottom:5,
        backgroundColor:"#ffffff"
    }
});

export default MythComponent;