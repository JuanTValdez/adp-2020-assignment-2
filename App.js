import React, { useState } from 'react';
import generator from 'sudoku';
import Layout from './src/layout.js';
import HeaderFooter from './src/header.js';
import { StyleSheet, Text, View, Title, requireNativeComponent } from 'react-native';


window.generator = generator;

function generatePuzzle(){


}



export default function App() {

  

  return (
    <View style={styles.container}>
      
      <HeaderFooter/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  
});
