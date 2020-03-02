import  React, { Component } from 'react';
import BoardInputField from './BoardInputField.js';
import { StyleSheet, View, Text,  } from 'react-native';




export default class GameBoard extends Component{
    render(){
        const { sudoku, onChange } = this.props;

      return(
        <div>
   
          { sudoku.solveTime &&  
          <h1> {console.log("is this firing")} You solved the sudoku!</h1> 
          }
          
          {sudoku.rows.map(row => (
           <div className="row" key={row.index}>
               {row.cols.map(field => (<BoardInputField field={field} key={field.col}
               onChange={onChange}
               /> 
               ))}

              
           </div>
           ))}

        </div>
      )
    
    }
}