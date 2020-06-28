import React, { Component } from 'react';
import { ScrollView,Text } from 'react-native';
import { Banner, Paragraph } from 'react-native-paper';
import { Card } from 'native-base';

class BannerComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            visible:true
        }
    }

    render(){
            return(
                <ScrollView>
                    <Card>
                    <Banner
                     visible={this.state.visible}
                     actions={[{label:'Okay',onPress:()=>this.setState({visible:false})}]}
                    >
                        <Paragraph style={{fontSize:22}}>You are not connected to the Internet</Paragraph>
                    </Banner>
                    </Card>
                </ScrollView>
            );
    }
}

export default BannerComponent;