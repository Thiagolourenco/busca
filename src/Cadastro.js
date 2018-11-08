import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native'

export default class Cadastro extends Component {
    
    constructor(props){
        super(props);
        this.state = {};

        this.clicou = this.clicou.bind(this);
        this.back = this.back.bind(this);
    }

    clicou(){
        alert('Cadastro Realizado Com Sucesso!1')
    }
    back(){
        this.props.navigation.goBack();
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../ImagemBuscaFacil/icons8-busqueda-50.png')} style={{width: 50, height: 50}}/>
                    <Text style={styles.textoTitulo}>Busca Fácil</Text>
                </View>
                <View style={styles.gpInputs}>
                    <TextInput placeholder="E-MAIL" style={styles.input}/>
                    <TextInput placeholder="SENHA" style={styles.input} secureTextEntry/>
                    <TextInput placeholder="CONFIRMAR SENHA" style={styles.input} secureTextEntry/>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btnCadastra} onPress={this.clicou}>
                        <Text style={styles.btnTitulo}>CADASTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnVolta} onPress={this.back}>
                        <Image source={require('../ImagemBuscaFacil/voltar.png')} style={{width: 36, height: 36}}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        flexDirection: 'row',
        paddingBottom: 25

    },
    textoTitulo:{
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        backgroundColor: '#ecf0f1',
        margin: 10,
        width: 340,
        height: 40
    },
    btnCadastra: {
        width: 250,
        height: 40,
        backgroundColor: '#3498db',
        borderRadius: 10,
        margin: 30
    },
    btnTitulo: {
        fontSize: 25,
        textAlign: 'center',
        padding: 4,
        color: '#ecf0f1'
    },
    btnVolta:{
        alignSelf: 'flex-start'
    }
})