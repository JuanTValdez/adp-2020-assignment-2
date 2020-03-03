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
      backgroundColor: '#e1231a',
      color: 'white',
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: Layout.height / 40,
       
    
      
    },
    footer:{
      backgroundColor: '#e1231a',
      paddingVertical: Layout.height / 100,
      width: Layout.width,
      margin: 'auto',
      position: 'fixed',
      bottom: 0,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      
    }
  });