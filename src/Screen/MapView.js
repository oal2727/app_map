import React, { PureComponent } from 'react'
import {View,Text,StyleSheet,Dimensions} from 'react-native'
// import ListTimer from "../components/Timer/ListTimer"

const {width, height} = Dimensions.get("window");
const MapView = () => {
    return (  
        <View style={styles.Box}>
            <Text style=
            {{alignSelf:"center",marginTop:50,
            fontSize:18}}>VERSION 1.0 MAP</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Box:{
       height:height/4,
       backgroundColor:"green",
    }
})
 
export default MapView;