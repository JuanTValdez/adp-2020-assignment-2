import {StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Layout from '.layout.js'
import { StylesProvider } from "@material-ui/core";

export default function NumberButtons(props)
{
    return(

        <View >

            <TouchableOpacity style={styles.container}>
                  <Text style={styles.button}> 1 </Text>
            </TouchableOpacity>

        </View>

        

    )

}
    const styles = StyleSheet.create({
        container: {
            height: Layout.height,
            width: Layout.width,
        },
        button:{
            
            fontSize: 40

        }

});
