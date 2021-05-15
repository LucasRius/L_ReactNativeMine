
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import params from './src/params';
import Field from './src/components/Fields';

export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.welcome}>Tamanho da grade:
        {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={4} />
        <Field opened nearMines={7} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FcFF',
  },
    welcome:{
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    }
});


