import React, { useState, Component, useEffect } from 'react'
import generator, { solvepuzzle } from 'sudoku'
import GameBoard from './components/GameBoard.js'
import HeaderFooter from './components/header.js'
import Button from '@material-ui/core/Button'
// Sudoku Module
import produce from 'immer';
import './src/App.css';
 
// sudoku puzzle generated was created with tutorial via FreeCodeCamps. 

// Generates Sudoku puzzle.

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
  
        const solved = checkSolution(state.sudoku)
        if(solved){
    
          state.sudoku.solveTime = new Date();
        }
      }
    })
    )
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
        
              <HeaderFooter />
              <GameBoard sudoku={this.state.sudoku} 
              onChange={this.handleChange}
              />

              <button className="solveButton" onClick={this.solveSudoku}> Are you stumped?  Use the Force!  </button>

        <div className="numButton"> 

              <button> 1 </button>
              <button> 2 </button>
              <button> 3 </button>
              <button> 4 </button>
              <button> 5 </button>
              <button> 6 </button>
              <button> 7 </button>
              <button> 8 </button>
              <button> 9 </button>

        </div>



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