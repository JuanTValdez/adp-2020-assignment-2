import React from 'react';
import { StyleSheet, View, Text,  } from 'react-native';
import Layout from './layout.js'
import { setWorldAlignment } from 'expo/build/AR';
import { AuthSession } from 'expo';





export default function HeaderFooter(){

    return (
        <View >
          
          
         <Text style={styles.title}>Sudoku</Text>
         <Text style={styles.footer}>Juan Valdez - Red Academy - App Development 2020</Text>
          
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
      padding: Layout.height / 40,
    
      
    },
    footer:{
      backgroundColor: '#282c34',
      paddingVertical: Layout.height / 100,
      width: Layout.width,
      position: 'fixed',
      bottom: 0,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      
    }
  });