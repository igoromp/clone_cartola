import React from 'react';
import {SectionList} from 'react-native';
import {HeaderList,PartidaListItem} from '../components';
import {DateUtil,Tools} from '../utils';


export default class PartidasListPage extends React.Component{

    constructor(props){
        super(props);
       
        const partidasTratadas = this.ordenarPartidas(this.props.navigation.state.params);

        this.state={ 
            _sections:[
                {
                    data:partidasTratadas,
                    title:"Partidas",
                    renderItem: ({item},index)=>(
                        <PartidaListItem  partida = {item}/>
                    ),
                    keyExtractor:(item)=>item.local  
                }
            ]                                  
        }

    }

    ordenarPartidas({partidas,times}){

        return partidas.map(element => {
            return {
                time_casa:{
                    abreviacao:times[element["clube_casa_id"]].abreviacao,
                    escudo:times[element["clube_casa_id"]].escudos["60x60"]
                },
                time_visitante:{
                    abreviacao:times[element["clube_visitante_id"]].abreviacao,
                    escudo:times[element["clube_visitante_id"]].escudos["60x60"]
                },
                local:element.local,
                partida_data:element.partida_data
            } ;
        }).sort( (e1,e2)=>{
            return new Date(DateUtil.dataISOPattern(e1.partida_data)).getTime() - new Date(DateUtil.dataISOPattern(e2.partida_data)).getTime();
        });

    }

    render(){
        return (
            <SectionList
                renderSectionHeader={({section: {title}}) => (
                    <HeaderList  title={title} buttons={false}  /* key={()=>Tools.generateKey()+15} *//>
                )}
                sections={this.state._sections}/>
        );
    }
}