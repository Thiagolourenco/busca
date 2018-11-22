import React, { Component } from 'react';
import { Text, View, Image,TouchableHighlight, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

class ListaItem extends Component {

    constructor(props){
        super(props);
        this.state = {};

    };
    
    render(){
        return(
            <TouchableHighlight underlayColor="#a29bfe" onPress={() => this.props.navigation.navigate('Faustino')}>
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

})

export default withNavigation(ListaItem);