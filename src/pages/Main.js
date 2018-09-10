import React from 'react';
import {ScrollView} from 'react-native';
import {List,ListItem} from 'react-native-elements';
import axios from 'axios';

import {
    TimeList
} from '../components';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            _clubes:[],
            _partidas:[]
        }
    }

    componentDidMount(){
        axios.get('https://api.cartolafc.globo.com/partidas')
             .then(resp=>{
                 const {clubes,partidas} = resp.data;
                 this.setState({
                     _clubes:clubes,
                     _partidas:partidas
                 });
                 
             });
        
    }

    render(){
        return (            
            <TimeList times={this.state._clubes} partidas={this.state._partidas}/>             
        );
    }
}