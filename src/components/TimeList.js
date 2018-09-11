import React from 'react';
import {SectionList,Text} from 'react-native';
import {TimeListItem,HeaderList} from '../components';

import {Tools,DateUtil} from '../utils';
import PartidaListItem from './PartidaListItem';

const TimeList = props=>{
    
    const {times,partidas} = props;
    
    //ORDENANDO TIMES POR ORDEM DE POSICAO
    const timesOrdenados =  Object.values(times).sort((e1,e2) => {
        return e1.posicao - e2.posicao;
    }).filter(e=> e.posicao < 11);
    
    //console.log(times);
    const partidasTratadas = partidas.map(element => {
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

    const _sections =[
        
        {
            data:partidasTratadas,
            title:"Partidas",
            renderItem: ({item},index)=>(
                <PartidaListItem  partida = {item}/>
            ),
            keyExtractor:(item)=>item.local  
        }
    ];


    return(
        <SectionList
            renderSectionHeader={({section: {title}}) => (
                <HeaderList  title={title} />
            )}
            sections={_sections}/>
            
    );
}
export default TimeList;