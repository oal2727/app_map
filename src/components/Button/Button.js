import React from 'react'
import {TouchableOpacity,Text,StyleSheet} from "react-native"

const Button = ({children,onPress}) => {
    return ( 
        <TouchableOpacity onPress={onPress} style={styles.buttonCard}>
            <Text style={styles.buttonCardText}>{children}</Text>
        </TouchableOpacity>
     );
}

const styles= StyleSheet.create({
    buttonCard:{
        backgroundColor:"#774CD0",
        borderRadius:15,
        width:100,
        height:40
    },
    buttonCardText:{
        color:"white",
        fontSize:15,
        flex:1,
        textAlign:'center',
        lineHeight:40
    }
})
export default Button;
