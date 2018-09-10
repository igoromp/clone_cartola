import React from 'react';
import {ListItem} from 'react-native-elements';

const  TimeListItem= props =>{
    const {time} =props;
         
    return(
        <ListItem
            avatar={time.escudos["30x30"]}
            title={time.nome}
            subtitle={`posição ${time.posicao}º`}
            key={time.nome}
        />);
   
    
}

export default TimeListItem;