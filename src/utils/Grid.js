import React from 'react';
import {FlatList,SafeAreaView,StyleSheet,View,Text} from 'react-native';
import {Tools} from '../utils';

export default class Grid extends React.Component{
    constructor(props){
        super(props);

        this.state={
            numColumns:this.props.numColumns,
            data:this.props.data,
        };
        console.log(this.state);
    }

    createRows(data, columns) {
        const rows = Math.floor(data.length / columns); // Calculando o número base de linhas que teremos
        let lastRowElements = data.length - rows * columns; // Calculando a quantidade de itens que irá sobrar na última linha
        while (lastRowElements !== columns) { // [Enquanto o número de itens na última linha não for igual ao número desejado de colunas
          data.push({ // adicionar elementos vazios no array disponibilizado
            id: `empty-${lastRowElements}`,
            name: `empty-${lastRowElements}`,
            empty: true
          });
          lastRowElements += 1; // Incrementamos o contador
        }
        return data; // Retornamos o novo array preenchido
      }


    render(){
        return (
            <SafeAreaView>
              <FlatList
                data={this.createRows(this.state.data, this.state.numColumns)}
                keyExtractor={()=>Tools.generateKey()}
                numColumns={this.numColumns}
                renderItem={({ item }) => {
                    if (item.empty) {
                        return <View style={[styles.item, styles.itemEmpty]} />;
                    }

                    return (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item}</Text>
                        </View>
                    );
                }}
              />
            </SafeAreaView>
          );

    }

}


const styles = StyleSheet.create({
    item: {
      alignItems: "center",
      backgroundColor: "#dcda48",
      flexGrow: 1,
      margin: 4,
      padding: 20,
      flexBasis: 0
    },
    text: {
      color: "#333333"
    }
  });