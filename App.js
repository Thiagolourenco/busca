import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import TelaIncial from './src/TelaIncial';
import Login from './src/Login';
import Home from './src/Home';
import ListaLugares from './src/ListaLugares';
import Restaurante from './src/Restaurante';
import Cadastro from './src/Cadastro'

const Navegador = StackNavigator({
  TelaIncial: {
    screen: TelaIncial
  },
  Login:{
    screen: Login
  },
  Home: {
    screen: Home
  },
  ListaLugares: {
    screen: ListaLugares
  },
  Restaurante:{
    screen: Restaurante
  },
  Cadastro:{
    screen: Cadastro
  }
},{
  headerMode: 'none'
})

export default Navegador;