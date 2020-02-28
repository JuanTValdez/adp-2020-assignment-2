import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Layout from './layout.js'

export default function Title(){

    return (
        <View >
          
          
         <Text style={styles.title}>Sudoku</Text>
          
        </View>
      );
    
}

const styles = StyleSheet.create({

    title: {
      backgroundColor: '#282c34',
      color: 'white',
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: Layout.height / 20,
    
      
    }
  });