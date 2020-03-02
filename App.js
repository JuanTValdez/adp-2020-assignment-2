import React, { useState, Component, useEffect } from 'react';
import generator, { solvepuzzle } from 'sudoku';
import Layout from './components/layout.js';
import GameBoard from './components/GameBoard.js'
import HeaderFooter from './components/header.js';
import { StyleSheet, Text, View, Title, requireNativeComponent } from 'react-native';
import { render } from 'react-dom';
import './src/App.css';
import produce from 'immer'; 

// stopped at 56 minutes.
// need to solve issue in gameboard.js
// line 15, sudoku.solvedTime not firing.

window.generator = generator;

function generatePuzzle(){
  const raw = generator.makepuzzle()
  const rawSolution = generator.solvepuzzle(raw);

  const formatted = raw.map(e => (e === null ? null : e + 1));
  const formattedSolution = rawSolution.map(e => e + 1);

  const result = { 
    rows: [], 
    solution: formattedSolution,
    startTime: new Date(),
    solvedTime: null,
  };


  // Takes result and saves the solved puzzle.
  result.solution = generator.solvepuzzle(raw).map(e => e + 1);

  for(let i = 0; i < 9; i++){
    const row = { cols: [], index: i};
    for(let j = 0; j < 9; j++){
      const value = raw[i * 9 + j];
      const col = {
        row: i,
        col: j,
        value: value,
        readonly: value != null,
      };
      row.cols.push(col);
    } 
    result.rows.push(row);
  }
  return result;
}

function checkSolution(sudoku){
  const candidate = sudoku.rows.map(row => row.cols.map(col => col.value)).flat();

  for (let i=0; i<candidate.length; i++){
    if(candidate[i] === null || candidate[i] !== sudoku.solution[i]) {
      return false;
    }
  }
  return true;
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = produce({},()=> ({
      sudoku: generatePuzzle()
      
    }));
  }

  handleChange = e => {
    this.setState(produce(state =>{
      state.sudoku.rows[e.row].cols[e.col].value = e.value;
      if(!state.sudoku.solvedTime){
        console.log("Check Solution");
        const solved = checkSolution(state.sudoku)
        if(solved){
          console.log("Solved!")
          state.sudoku.solvedTime = new Date();
        }
      }
    }))
  }

   
  

  solveSudoku = e => {
    this.setState(
      produce(state => {
  
        state.sudoku.rows.forEach(row => row.cols.forEach(col => {
       
         col.value = state.sudoku.solution[col.row * 9 + col.col]
        
        })
      ); 
     })
    )
  }

  render(){
    return(

      <div className="App" >
        
       <header className="App-header">
          <h1> Sudoku </h1>
       </header>  

      <GameBoard sudoku={this.state.sudoku} 
      onChange={this.handleChange}
        />

      <button onClick={this.solveSudoku}> Auto-Solve </button>

      </div>
    )
  }

}

export default App;

// const App = (props) => {
//   const [sudokuData, setSudoku] = useState(null);

//   useEffect(() => {
//     setSudoku(generatePuzzle())
//   }, [])

//    this.state = { 
//       sudoku: generatePuzzle()
//    }
  
//   return (
//     <View style={styles.container}>
      
//       <HeaderFooter/>
//       {/* {<GameBoard sudokuData={sudokuData}/> } */}
    
//     </View>
//   );
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     //alignItems: 'center',
//     //justifyContent: 'center',
//   },
  
// });

// export default App;