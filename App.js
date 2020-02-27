import React, { useState } from 'react';
import { StyleSheet, Text, View, requireNativeComponent } from 'react-native';

export default function App() {

  const [x, updateX] = useState(0);
  let counter = 0;
  let counterDelay = 60;

  const triggerTimer = () =>{

    if(counter == counterDelay){
      
    updateX(x+1);
    
    triggerTimer();
  triggerTimer();

    console.log("This runs")
   
    }else{

      counter = counter + 1;
      console.log("This also runs noob");
      console.log("Counter equals: " + counter);
      requestAnimationFrame(triggerTimer);
    }

  }


    

  triggerTimer();

  return (



    <View style={styles.container}>
      <Text>App has beening running for:</Text>
      <Text>{x} ms </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
