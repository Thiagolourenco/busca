import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    Image,
    StyleSheet
} from 'react-native'

export default class Restaurante extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../ImagemBuscaFacil/icons8-busqueda-50.png')} style={{width: 50, height: 50}}/>
                    <Text style={styles.textoTitulo}>Busca Fácil</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
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