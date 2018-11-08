import React, { Component } from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    View,
    StyleSheet,
    FlatList,
    Image
} from 'react-native'

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

class ListaItem extends Component {

    constructor(props){
        super(props);
        this.state = {};

        this.clicou = this.clicou.bind(this)
    };

    clicou(){
        alert('opa');
    }
    render(){
        
        return(
            <TouchableHighlight underlayColor="#a29bfe" onPress={this.clicou}>
                <View style={styles.lugaresItems}>
                    <Image source={this.props.data.img} style={styles.lugaresImagem}/>
                    <View style={styles.containerLista}>
                        <Text style={styles.textoTitle}>{this.props.data.title}</Text>
                        <Text style={styles.textoDescricao}>{this.props.data.descri}</Text>
                    </View>
                </View>
                
            </TouchableHighlight>
            
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
    lugaresItems: {
        flex: 1,
        height:100,
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#b2bec3',
        flexDirection: 'row'
    },
    lugaresImagem: {
        width: 70,
        height: 70,
        margin: 10,
        alignSelf: 'flex-start',
        borderRadius: 5
    },
    textoTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    textoDescricao: {
        fontSize: 15
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