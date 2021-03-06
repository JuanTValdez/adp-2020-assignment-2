import  React, { Component } from 'react';
import BoardInputField from './BoardInputField.js';
import Timer from './Timer.js'
import { StyleSheet, View, Text,  } from 'react-native';




export default class GameBoard extends Component{
    render(){
        const { sudoku, onChange } = this.props;

      return(
        <div>
          {!sudoku.solveTime && <Timer start={sudoku.startTime}> </Timer>}
          { sudoku.solveTime &&  
          <h3> You win, but the princess is in another castle.</h3> 
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