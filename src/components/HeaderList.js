import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Button,ButtonGroup} from 'react-native-elements';
import {Tools} from '../utils';

const HeaderList = props=>{
    const {title,up,down,buttons} = props;
   
    

    return( 
        <View style={Styles.container} key={()=>Tools.generateKey()}>
            <Text style={Styles.label}>{title}</Text> 

            { buttons ? 
                    <View style={Styles.btnContainer}>
                        <Button 
                        backgroundColor='transparent'
                        buttonStyle={Styles.btn}
                        icon={{name:'arrow-downward'}}
                        iconStyle={{alignSelf:'center'}}
                        onPress={()=>down()
                        }                
                        />,
                        <Button 
                            backgroundColor='transparent'
                            buttonStyle={Styles.btn}
                            icon={{name:'arrow-upward'}}
                            iconStyle={{alignSelf:'center'}}
                            onPress={()=>up()}
                                      
                        />
                    </View>
                : 
                null

            } 
            
        </View>
           
    );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'rgb(88,141,85)',
    },
    btn:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:15,
        marginTop:5,
        marginBottom:5,
    },
    btnContainer: {
        flexDirection: 'row'
    },
    label:{
        flex:1,        
        fontSize:18,
        color:'white',
        padding:10
    },
    
})

export default HeaderList;