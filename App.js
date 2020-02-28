import React, { useState } from 'react';
import generator from 'sudoku';
import Layout from './src/layout.js';
import Title from './src/header.js';
import { StyleSheet, Text, View, requireNativeComponent } from 'react-native';


window.generator = generator;

export default function App() {

  

  return (
    <View style={styles.container}>
      
      <Title/>
    
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
