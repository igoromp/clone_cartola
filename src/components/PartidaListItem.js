import React from  'react';
import {View,Image,Text} from 'react-native';
import {Card} from 'react-native-elements';
import {DateUtil} from '../utils';
import CardView from 'react-native-cardview';


const PartidaListItem = props =>{
        const {partida} = props;
        const {time_casa,time_visitante} = partida;
       //console.log(DateUtil.dataPorExtenso(partida.partida_data));

    return (        
        <CardView containerStyle={{
        }}
        cardElevation={3}
        cardMaxElevation={5}
        cornerRadius={5}          
        >
           <View style={{flex:1,flexDirection:'row',alignItems:'flex-start'}}>
                <View style={{flex:6,}}>
                   <Card                         
                        title={time_casa.abreviacao}
                        image={{uri:time_casa.escudo}}
                        imageStyle={{width:45,height:45,alignSelf:'center',borderColor:'white'}}
                        
                   />
                </View>
                
                <View style={{flex:3,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'center',
                        alignSelf:'center'
                        }}>
                   
                    <Text style={{                       
                       fontSize:40,
                       fontWeight:'bold',
                       }}>VS</Text>
                </View>

                <View style={{flex:6}}>
                    <Card
                        title={time_visitante.abreviacao}
                        image={{uri:time_visitante.escudo}}
                        imageStyle={{width:45,height:45,alignSelf:'center'}}                        
                    />
                </View>
           </View>

           <Text style={{marginTop:20,textAlign:'center',fontSize:15,fontWeight:'700'}}>
                Local:{partida.local}
            </Text>
            <Text style={{marginTop:5,textAlign:'center',fontSize:14,}}>                      
                {DateUtil.dataPorExtenso(partida.partida_data)} 
            </Text>
            <Text style={{marginTop:5,textAlign:'center',fontSize:14,}}>                      
                às {DateUtil.horaPorExtenso(partida.partida_data)} 
            </Text>
        </CardView>
    );
}
export default PartidaListItem;