import React from 'react';
import {SectionList} from 'react-native';
import {HeaderList,TimeListItem} from '../components';


export default class TabelaColocacaoPage extends React.Component{
    constructor(props){
        super(props);
       // console.log(this.props);
        const {times} = this.props.navigation.state.params;
        //console.log(times);

        const timesOrdenados =  Object.values(times).sort((e1,e2) => {
            return e1.posicao - e2.posicao;
        }).filter(e=> e.posicao < 11);

        this.state={ 
            _sections:[
                {
                    data:timesOrdenados,
                    title:"Clubes",
                    renderItem: ({item},index)=>(
                        <TimeListItem time={item} />
                    ),
                    keyExtractor:(item)=>item.nome 
                }
            ]                                  
        }

    }


    render(){
        return (
            <SectionList
                renderSectionHeader={({section: {title}}) => (
                    <HeaderList  title={title} />
                )}
                sections={this.state._sections}/>
        );
    }
}