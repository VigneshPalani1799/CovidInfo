import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigation/TabNavigation';

class Main extends Component{
    render(){
        return(
            <NavigationContainer>
                <TabNavigation/>
            </NavigationContainer>
        );
    }
}

export default Main;