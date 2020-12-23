import React, { PureComponent } from 'react'
import {View,Text,StyleSheet,Dimensions} from "react-native"

const CardFlat = ({time}) => {


    return ( 
        <View style={styles.cardFlat} >
            <View style={styles.boxFlat}>
                <Text style={styles.cardFlatText}>Tiempo Pausado</Text>
                <Text style={{...styles.cardFlatText,
                        fontWeight:"bold",fontSize:18}}>{time}</Text>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    cardFlat:{
        alignSelf:"center",
        marginTop:20,
        borderRadius:20,
        width:350,
        height:50,
        padding:10,
        backgroundColor:"#4B4453"
    },
    boxFlat:{
        
        flexDirection:"row",
        justifyContent:"space-around"
    },
    cardFlatText:{
        lineHeight:30,
        fontSize:15,
        color:"white"
    }   
})
 
export default CardFlat;