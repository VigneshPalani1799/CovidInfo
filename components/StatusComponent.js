import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';

function RenderStatus({error,confirmed,active,recovered,deaths,lastUpdated})
{
    if(error===true)
        return(
            <View>
                <Text>Try Checking your connection</Text>
            </View>
        )
    else
        return(
            <DataTable style={{paddingBottom:15}}>
                <DataTable.Header style={{textAlign:'center'}}>
                    <DataTable.Title>Confirmed</DataTable.Title>
                    <DataTable.Title>Active</DataTable.Title>
                    <DataTable.Title>Recovered</DataTable.Title>
                    <DataTable.Title>Death</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                    <DataTable.Cell>{confirmed}</DataTable.Cell>
                    <DataTable.Cell>{active}</DataTable.Cell>
                    <DataTable.Cell>{recovered}</DataTable.Cell>
                    <DataTable.Cell>{deaths}</DataTable.Cell>
                </DataTable.Row>
            </DataTable>
        );
}

class StatusComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            error:false,
            errorMessage:'',
            confirmed:0,
            active:0,
            recovered:0,
            deaths:0,
            lastUpdated:'',
        };
    }

    componentDidMount(){
        axios.get('https://api.covid19india.org/data.json')
        .then((result) => {
            this.setState({
                confirmed:result.data.statewise[0].confirmed,
                active:result.data.statewise[0].active,
                recovered:result.data.statewise[0].recovered,
                deaths:result.data.statewise[0].deaths,
                lastUpdated:result.data.statewise[0].lastupdatedtime
            })
        })
        .catch((error) => {
            this.setState({
                error:true,
                errorMessage:"Try Checking your internet"
            });
        });
    }

    render(){
        return(
            <>
                <Text style={styles.heading}>Current Status</Text>
                <RenderStatus
                    error={this.state.error}
                    errorMessage={this.state.errorMessage}
                    confirmed={this.state.confirmed}
                    active={this.state.active}
                    recovered={this.state.recovered}
                    deaths={this.state.deaths}
                    lastUpdated={this.state.lastUpdated}
                />
            </>
        );
    }
}

export default StatusComponent;

const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        color:'#01579B',
        paddingTop:15,
        paddingLeft:10,
        paddingBottom:5,  
    },
});