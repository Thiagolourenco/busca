import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {};

        this.back = this.back.bind(this);
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
            <View>
                <TextInput style={styles.input} placeholder="EMAIL"/>
                <TextInput style={styles.input} placeholder="SENHA"/>
            </View>
            <View>
                <TouchableOpacity style={styles.containerLogar} onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text style={styles.btnLog}>LOGAR</Text>
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

    container: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input:{
        borderWidth: 1,
        backgroundColor: '#ecf0f1',
        margin: 10,
        width: 340,
        height: 40
    },
    containerLogar: {
        width: 250,
        height: 40,
        backgroundColor: '#3498db',
        borderRadius: 10,
        margin: 30
    },
    btnLog:{
        fontSize: 25,
        textAlign: 'center',
        padding: 4,
        color: '#ecf0f1'
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
    btnVolta:{
        alignSelf: 'flex-start'
    }
})