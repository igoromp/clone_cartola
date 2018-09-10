import React from 'react';
import {createStackNavigator} from 'react-navigation';

//Routers
import {Main} from '../pages'

const RootStack=  createStackNavigator({
    'Main':{
        screen:Main
    },

},{
    navigationOptions:{
        title:'CLONE CARTOLA',
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'rgba(222,103,46,0.85)',        
        },
        headerTitleStyle:{
            fontSize:18,  
        }
        
    }
});

export default RootStack;