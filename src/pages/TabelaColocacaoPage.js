import React from 'react';
import {SectionList} from 'react-native';
import {HeaderList,TimeListItem} from '../components';
import {Buttons} from 'react-native-elements';
import {Tools} from '../utils';


export default class TabelaColocacaoPage extends React.Component{
    constructor(props){
        super(props);
        const {times} = this.props.navigation.state.params;
        
        this.state={
            _times:times,
            _sections:[
                {
                    data:[],
                    title:"Clubes",
                    renderItem: ({item},index)=>(
                        <TimeListItem time={item} />
                    ),
                    keyExtractor:(item)=>item.nome 
                }
            ]                        
        };
       

    }

    componentDidMount() {
        this.ordenarTimesPorPosicaoCrescente(this.state._times)
    }

    ordenarTimesPorPosicaoCrescente(times){
        
        const ordenado =  Object.values(times).sort((e1,e2) => {
            return e1.posicao - e2.posicao;
        }).filter(e=> e.posicao < 11);

        this.setState({
            _sections:[
                {
                    data:ordenado,
                    title:"Clubes",
                    renderItem: ({item},index)=>(
                        <TimeListItem time={item} />
                    ),
                    keyExtractor:(item)=>item.id 
                }
            ]       
        });
    }

    ordenarTimesPorPosicaoDecrescente(times){        
        const ordenado = Object.values(times).sort((e1,e2) => {
            return e2.posicao - e1.posicao;
        }).filter(e=> e.posicao < 11);
        
        
        this.setState({
            _sections:[
                {
                    data:ordenado,
                    title:"Clubes",
                    renderItem: ({item},index)=>(
                        <TimeListItem time={item} />
                    ),
                    keyExtractor:(item)=>item.nome 
                }
            ]       
        });
    }


    render(){
        
        return (
            <SectionList
                renderSectionHeader={({section: {title}}) => (
                    <HeaderList  title={title} 
                        up={()=>this.ordenarTimesPorPosicaoCrescente(this.state._times)} 
                        down={ ()=>this.ordenarTimesPorPosicaoDecrescente(this.state._times)} 
                        buttons={true}
                        keyExtractor={()=>Tools.generateKey()}
                        />
                )}
                sections={this.state._sections}/>
        );
    }
}