import React from 'react'
import {FlatList,View,
  StyleSheet,Text,StatusBar,SafeAreaView } from "react-native"
import CardFlat from "../Card/CardFlat"

const ListTimer = ({flats}) => {



    return (
        <View style={styles.container}>
               
                  <FlatList
                  numColumns={1}
                  data={flats}
              keyExtractor={(item) => item.id}
              renderItem={({item,index}) => (
                <CardFlat time={item.lap} />
              )}
                  />
        </View >
      );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: "center",
      alignItems: "center"
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    //data
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default ListTimer;