import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import MythComponent from '../MythComponent';
import AnswerComponent from '../AnswerComponent';

const Stack = createStackNavigator();

function MyStack(){
    return(
    <Stack.Navigator>
        <Stack.Screen name = "Questions" component={MythComponent} options={{
            headerStyle:{
                backgroundColor:"#6979F5",
            },
            title:"CovidInfo",
            headerTitleStyle:{
                color:"#fff",
                fontSize:40
            }
        }}/>
        <Stack.Screen name = "Answer" component={AnswerComponent}
            options={{
                headerStyle:{
                    backgroundColor:"#6979F5",
                },
            title:"CovidInfo",
            headerTitleStyle:{
                color:"#fff",
                fontSize:40
            },
            headerTintColor:"#fff"
        }}
        />
    </Stack.Navigator>
    );
}

export default MyStack;