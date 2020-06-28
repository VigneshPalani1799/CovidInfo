import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Col, Grid } from 'native-base';
import {useNetInfo} from '@react-native-community/netinfo'
import axios from 'axios';

import HeaderComponent from './HeaderComponent';
import StatusComponent from './StatusComponent';
import AnimatedLoader from "react-native-animated-loader";
import BannerComponent from './BannerComponent';


function RenderTable({data}){
    if(data!==null){
        return(
         data.map((cases,i)=>{
             return(
                <DataTable>
                        <Grid>
                            <Col style={{paddingTop:15,paddingLeft:5,fontSize:30}}>
                                <DataTable.Cell>{cases.state}</DataTable.Cell>
                            </Col>
                            
                            <Col style={{paddingTop:8,paddingLeft:5}}>
                                <DataTable.Cell >{cases.active}</DataTable.Cell>
                            </Col>
                            <Col style={{paddingTop:8,paddingLeft:5}}>
                                <DataTable.Cell >{cases.recovered}</DataTable.Cell>
                            </Col>
                            <Col style={{paddingTop:8,paddingLeft:5}}>
                                <DataTable.Cell>{cases.deaths}</DataTable.Cell>
                            </Col>
                        </Grid>
                    
                </DataTable>)
            })   
        );
    }
    else{
        return(<View></View>);
    }
}

function RenderSpinner({fetched,error}){
    if(fetched===false && error===false )
    return(
        <AnimatedLoader
                visible={true}
                overlayColor="#fff"
                animationStyle={styles.lottie}
                speed={2}
        />
    );
    else
        return(<ScrollView>
            
        </ScrollView>
    );
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


class TrackerComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            data:[],
            error:false,
            fetched:false,
        }
    }

    componentDidMount(){
        axios.get('https://api.covid19india.org/data.json')
        .then(result=>{
            this.setState({data:result.data.statewise,fetched:true});
        })
        .then(()=>{
            const filteredArray=this.state.data.filter((cases)=>(cases.statecode!=="TT" && cases.statecode!=="UN"));
            this.setState({data:filteredArray});
        }
        )
        .catch(error=>{
            this.setState({error:true})
        });
    }

    render(){
        return(
            <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:"#ffffff"}}>
                <View>
                    <HeaderComponent/>
                </View>
                <View>
                    <StatusComponent/>
                </View>
                <View>
                    <RenderStatus/>
                </View>
                <View>
                    <DataTable.Header>
                        <DataTable.Title>State</DataTable.Title>
                        <DataTable.Title>Active</DataTable.Title>
                        <DataTable.Title>Recovered</DataTable.Title>
                        <DataTable.Title>Deaths</DataTable.Title>
                    </DataTable.Header>
                </View>
                <View>
                    <RenderSpinner 
                        fetched={this.state.fetched}
                        error={this.state.error}
                    />
                </View>
                <View>
                    <RenderTable data={this.state.data}/>
                </View>
            </ScrollView>
        );
    }

}

export default TrackerComponent;

const styles = StyleSheet.create({
    lottie:{
        width: 100,
        height: 100
    },
})