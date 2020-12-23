import React  from 'react'
import {View,Text,StyleSheet} from "react-native"

const CardTimer = ({time}) => {

    const formatTime = (timer) => {
        const getSeconds = `0${timer % 60}`.slice(-2);
        const minutes = `${Math.floor(timer / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`;
      };

    return ( 

        
        <View style={styles.cardTimer}>
            <View style={{alignSelf:"center",marginTop:20}}>
                <Text style={styles.cardTimerText}>{formatTime(time)}</Text>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    cardTimer:{
        width:200,
        height:100,
        borderRadius:30,
        marginTop:80,
        backgroundColor:"#00C0A3",
        flexDirection:"column",
        alignSelf:"center"
    },
    cardTimerText:{
        marginTop:10,
        color:"white",
        fontSize:30
    }

})
 
export default CardTimer;