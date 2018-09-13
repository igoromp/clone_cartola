import React from 'react';
import {SectionList} from 'react-native';
import {HeaderList,TimeListItem} from '../components';
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
            ],
            _statelist:{
                status:'crescente',
                icon:'arrow-downward'
            },

        };
       

    }

    componentDidMount() {
        this.ordenar(this.state._times)
        console.log(this.state._statelist);
    }

    ordenar(times){
        let {_statelist} = this.state;
        let status;
        const ordenado =  Object.values(times).sort((e1,e2) => {
            return  _statelist.status =='crescente'? e1.posicao - e2.posicao : e2.posicao - e1.posicao ;          
        }).filter(e=> e.posicao < 11);


        _statelist.status = _statelist.status== 'crescente'?'descrecente':'crescente';
        _statelist.icon = _statelist.status=='crescente'?'arrow-upward':'arrow-downward'; 
              
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
            ], 
            _statelist:_statelist      
        });
    }



    render(){
        
        return (
            <SectionList
                renderSectionHeader={({section: {title}}) => (
                    <HeaderList  title={title} 
                        /* up={()=>this.ordenarTimesPorPosicaoCrescente(this.state._times)} 
                        down={ ()=>this.ordenarTimesPorPosicaoDecrescente(this.state._times)}  */
                        call={()=>this.ordenar(this.state._times)}
                        icon={this.state._statelist.icon}
                        buttons={true}
                        keyExtractor={()=>Tools.generateKey()}
                        />
                )}
                sections={this.state._sections}/>
        );
    }
}