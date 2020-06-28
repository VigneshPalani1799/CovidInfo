import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import TrackerComponent from '../TrackerComponent';
import HomeComponent from '../HomeComponent';
import InfoComponent from '../InfoComponent';
import MyStack from './StackNavigation';


const Tab = createBottomTabNavigator();

function TabNavigation(){
    return(
            <Tab.Navigator>
                <Tab.Screen 
                    name = "Home"
                    component = {InfoComponent}
                    options = {{
                        tabBarLabel:"Home",
                        tabBarIcon:({tintcolor})=>{
                            return(
                                <Icon
                                    name="home"
                                    type="font-awesome"
                                    size={26}
                                    color="#01579B"
                                />
                            );
                        }
                    }}
                />

                <Tab.Screen 
                    name = "News"
                    component = {HomeComponent}
                    options = {{
                        tabBarLabel:"News",
                        tabBarIcon:({tintcolor})=>{
                            return(
                                <Icon
                                    name="newspaper-o"
                                    type="font-awesome"
                                    size={26}
                                    color="#01579B"
                                />
                            );
                        }
                    }}
                />

                <Tab.Screen 
                    name="Status"
                    component={TrackerComponent}
                    options={{
                        tabBarLabel:"Status",
                        tabBarIcon:({tintcolor})=>{
                            return(
                                <Icon
                                    name="bar-chart-o"
                                    type="font-awesome"
                                    size={26}
                                    color="#01579B"
                                />
                            );
                        }
                    }}
                />

                <Tab.Screen 
                    name = "Questions"
                    component = {MyStack}
                    options = {{
                        tabBarLabel:"Questions",
                        tabBarIcon:({tintcolor})=>{
                            return(
                                <Icon
                                    name="question-circle"
                                    type="font-awesome"
                                    size={26}
                                    color="#01579B"
                                />
                            );
                        }
                    }}
                />
            </Tab.Navigator>
    );
}

export default TabNavigation;