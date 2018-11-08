import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';
import Lista from './Lista'
export default class Home extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    key: '1',
                    name: 'Restaurante',
                    img:require('../ImagemBuscaFacil/restaurante.png'),
                    bg: '#74b9ff',
                    lugares: [
                        {key: '1', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '2', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '3', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '4', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')}
                    ]
                },
                {
                    key: '2', 
                    name: 'Farmacia',
                    img:require('../ImagemBuscaFacil/if_100_111046.png'),
                    bg: '#a29bfe',
                    lugares: [
                        {key: '1', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '2', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '3', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '4', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')}
                    ]

                },
                {
                    key: '3', 
                    name: 'Loja',
                    img:require('../ImagemBuscaFacil/if_shopify_3018711.png'),
                    bg: '#c7ecee',
                    lugares: [
                        {key: '1', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '2', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '3', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '4', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')}
                    ]

                },
                {
                    key: '4', 
                    name: 'Supermercado',
                    img:require('../ImagemBuscaFacil/supermercado.png'),
                    bg: '#badc58',
                    lugares: [
                        {key: '1', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '2', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '3', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')},
                        {key: '4', title: 'Faustino', descri:'Restaurante com comidas caseiras', img:require('../ImagemBuscaFacil/restauranteFaustino.jpg')}
                    ]

                },
            ]
        };
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../ImagemBuscaFacil/icons8-busqueda-50.png')} style={{width: 50, height: 50}}/>
                    <Text style={styles.textoTitulo}>Busca Fácil</Text>
                </View>
                    <View style={{alignItems: 'center', paddingBottom:8}}>
                        <TextInput placeholder="PESQUISAR" style={styles.input}/>
                    </View>
                <FlatList 
                    data={this.state.list}
                    renderItem={({item}) => <Lista data={item} navigation={this.props.navigation}/>}
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
    input:{
        borderWidth: 1,
        backgroundColor: '#ecf0f1',
        margin: 10,
        width: 340,
        height: 40
    },
})