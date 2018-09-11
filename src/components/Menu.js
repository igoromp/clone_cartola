import React from 'react';
import {ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {Grid,Tools} from '../utils';


const Menu = props =>{
    const {icon, buttons,times,partidas} = props;
  
    return(

            //<Grid  numColumns={numColumns} data ={data}/>
        <ScrollView >
            {
                buttons.map(btn=>{
                    return (
                        <Button buttonStyle={{
                                marginTop:10,
                                marginBottom:5,
                                backgroundColor:(btn.backgroundColor=='')?'#8ac54e':btn.backgroundColor,
                                }} 
                            key={Tools.generateKey() } 
                            fontSize={16}
                            fontWeight={'700'} 
                            title={btn.title}
                            icon={icon}
                            times={times}
                            partidas={partidas}
                            onPress={()=>btn.onPress(btn.page,{times,partidas})}/>
                    );
                })
            }
             
        </ScrollView>
    );
}

export default Menu;