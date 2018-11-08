import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'

export default class TelaIncial extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../ImagemBuscaFacil/icons8-busqueda-50.png')} style={{width: 200, height: 200, margin: 10}}/>

                <View style={styles.headerTitulo}>
                    <Text style={styles.titulo}>BuscaFácil</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnLogar} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.btnText}>LOGAR</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnCadastrar} onPress={() => this.props.navigation.navigate('Cadastro')}> 
                        <Text style={styles.btnText}>CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        fontSize: 45,
        fontWeight: 'bold'
    },
    btnLogar:{
        width: 250,
        height: 40,
        backgroundColor: '#3498db',
        borderRadius: 10,
        margin: 30
    },
    btnText: {
        fontSize: 25,
        textAlign: 'center',
        padding: 3,
        color: '#ecf0f1'
    },
    btnCadastrar:{
        width: 250,
        height: 40,
        backgroundColor: '#3498db',
        borderRadius: 10,
    }

})