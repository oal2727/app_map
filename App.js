import React from 'react';
import { Dimensions,View,Text } from 'react-native';
import TimerContextProvider from "./src/context/TimerContextProvider"
import Navigator from "./src/router"
// import {Location,Permisions} from 'expo'

//Marker :  identifica una ubicación en un mapa. Lo usaremos para identificar la ubicación del usuario en el mapa.
//AnimatedRegion : nos permite utilizar la API animada para controlar el centro y el zoom del mapa.
//librarie => location define tu ubicacion exacta

//1.location && Permisions => permisos para uso de la ubicacion exacta y herramientas internas 
//2. 

//NOTA SOLO TRABAJAR CON LATITUD Y LONGITUD

//Necesito almacenar latitudeDelta (zoom) en un estado para poder representar los marcadores en función del nivel de zoom. 
//Pero cuando ejecuto el código anterior e intento mover el mapa, sigue saltando a la posición anterior

export default function App() {

  //1000 metros =>  
  //1 metro => 100cm sdf
  return (
    <TimerContextProvider>
    <Navigator/>
    </TimerContextProvider>
  );
}

