import React from 'react';
import {createStackNavigator} from 'react-navigation';

//Routers
import {Main,TabelaColocacaoPage,PartidasListPage} from '../pages'

const RootStack=  createStackNavigator({
    'Main':{
        screen:Main,
        navigationOptions:{title:'CartolaFC.Clone'}
    },
    'TabelaColocacaoPage':{
        screen:TabelaColocacaoPage,
        navigationOptions:{title:'Tabela do Campeonato'}
    },
    'PartidasListPage':{
        screen:PartidasListPage,
        navigationOptions:{title:'Próximos Jogos'}
    }

},{
    navigationOptions:{
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