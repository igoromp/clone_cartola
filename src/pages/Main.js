import React from 'react';
import axios from 'axios';

import {
    Menu
} from '../components';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            _clubes:[],
            _partidas:[],
            _buttons:[
                {
                    title:'Tabela do Campeonato',
                    key:this.title,
                    backgroundColor:'',
                    onPress:(page,state)=>this.props.navigation.navigate(page,state),
                    page:'TabelaColocacaoPage',
                },
                {
                    title:'Próxima Rodada',
                    key:this.title,
                    backgroundColor:'',
                    onPress:(page,state)=>this.props.navigation.navigate(page,state),
                    page:'PartidasListPage' 
                }
            ]
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
            <Menu buttons={this.state._buttons}
                  times={this.state._clubes} 
                  partidas={this.state._partidas}/>             
        );
    }
}