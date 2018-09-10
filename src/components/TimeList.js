import React from 'react';
import {SectionList,Text} from 'react-native';
import {TimeListItem,HeaderList} from '../components';

import {Tools} from '../utils';
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
                escudo:times[element["clube_casa_id"]].escudos["30x30"]
            },
            time_fora:{
                abreviacao:times[element["clube_visitante_id"]].abreviacao,
                escudo:times[element["clube_visitante_id"]].escudos["30x30"]
            },
            local:element.local,
            partida_data:element.partida_data
        } ;
    });

    console.log(partidasTratadas);

    const _sections =[
        {data:timesOrdenados,title:"Clubes"},
        {data:[],title:"Partidas"}
    ];

    return(
        <SectionList    
            renderItem={({item},index)=>(
                <TimeListItem time={item} />
            )} 
            renderSectionHeader={({section: {title}}) => (
                <HeaderList  title={title} />
            )}
            sections={_sections}
            keyExtractor={(item)=>item.nome}
            />
            
    );
}
export default TimeList;