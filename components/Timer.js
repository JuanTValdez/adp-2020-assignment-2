import React, { useState } from 'react'
import { StyleSheet, Text, View, requireNativeComponent } from 'react-native'

export default function Timer(){

  const [x, updateX] = useState(0);
  let counter = 0;
  let counterDelay = 60;

  const triggerTimer = () => {

    if(counter == counterDelay){
      updateX(x + 1);
      triggerTimer();

    }else{

      counter = counter + 1;
      
      requestAnimationFrame(triggerTimer);
    }
  }

    triggerTimer();

    return(

      <View style={styles.container}>
        <Text style={styles.button}> Time: {x}  </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  button:{
    marginVertical: 20,
    fontSize: 20,
  
  }
})









// import React, { Component } from 'react';

// export default class Time extends Component{

//   constructor(props){
//         super(props)
//         this.state = { 
//           elapsed: 0
//         };
//     }

//   componentDidMount(){

//     this.interval = setInterval(() => {
//         this.setState({
//             elapsed: Math.floor(
//                 (new Date().getTime() - this.props.start.getTime()) / 1000
//             )
//         })
//     })
//   }
//   componentWillUnmount(){

//     delete this.interval;
//   }

//   render(){
//       const { elapsed } = this.state;
//       return <h2> Time: {elapsed} </h2>
//   }


// }