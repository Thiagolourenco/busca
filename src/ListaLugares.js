import React, { Component } from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    View,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import ListaItem from './ListaItem';
import {StackNavigator} from 'react-navigation';

export default class ListaLugares extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:props.navigation.state.params.lugares
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../ImagemBuscaFacil/icons8-busqueda-50.png')} style={{width: 50, height: 50}}/>
                    <Text style={styles.textoTitulo}>Busca Fácil</Text>
                </View>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => <ListaItem data={item}/>}
                />
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    containerLista: {
        flexDirection: 'column',
        marginLeft: 10
    },
    header: {
        flexDirection: 'row',
        paddingBottom: 25,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textoTitulo:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        
    },

})