import React from 'react';
import {ListItem} from 'react-native-elements';

const  TimeListItem= props =>{
    const {time} =props;
         
    return(
        <ListItem
            avatar={time.escudos["30x30"]}
            title={time.nome}
            subtitle={`${time.posicao}º colocado`}
            key={time.nome}
            hideChevron
        />);
   
    
}

export default TimeListItem;