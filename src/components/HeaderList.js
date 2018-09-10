import React from 'react';
import {Text,StyleSheet} from 'react-native';

const HeaderList = props=>{
    const {title} = props;
    return(
        <Text style={Styles.label}>{title}</Text>
    );
}

const Styles = StyleSheet.create({
    label:{
        backgroundColor:'rgb(88,141,85)',
        fontSize:18,
        color:'white',
        padding:10
    }
})

export default HeaderList;