import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class Lista extends Component{

    constructor(props){
        super(props);
        this.state = {};

        this.clicou = this.clicou.bind(this);
    }

    clicou(){
        this.props.navigation.navigate('ListaLugares',{lugares:this.props.data.lugares});
    }

    render(){
        return(
            <TouchableHighlight underlayColor="#a29bfe" onPress={this.clicou} style={[styles.container, {backgroundColor: this.props.data.bg}]}>
                                    
                    <View style={styles.listaItem}>
                        <Image source={this.props.data.img} style={styles.imagem}/>
                        <Text style={styles.texto}>{this.props.data.name}</Text>
                    </View>
             </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:100,
        borderRadius: 10,
        margin: 10,
    },
    imagem: {
        width: 70,
        height: 70,
        margin: 10,
        alignSelf: 'flex-start'
    },
    texto: {
        fontSize: 25,
        textAlign: 'center',
        paddingTop: 27,
        marginLeft: 8
    },
    listaItem: {
        flexDirection: 'row',
        margin: 8
    }
    
})