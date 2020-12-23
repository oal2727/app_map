import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import MapView from "./Screen/MapView"
import TimerView from "./Screen/TimerView"
const Tab = createBottomTabNavigator();

const TapNavigator = () => {
    return ( 
        <NavigationContainer>
        <Tab.Navigator initialRouteName="Tiempo"  tabBarOptions={{
            activeTintColor: '#e91e63',
          }}>

        <Tab.Screen name="Mapa" component={MapView} options={{
            tabBarLanel: 'Mapa',
            tabBarIcon: ({color,size}) =>(
        <FontAwesome5 name="map-marked" size={24} color={color} />    
        ),
        }} />
       <Tab.Screen name="Tiempo" component={TimerView} options={{
            tabBarLanel: 'Tiempo',
            tabBarIcon: ({color,size}) =>(
                <MaterialIcons name="timer" size={24} color={color} />
            ),
        }} />
        {/* <Tab.Screen name="Notification" component={Notification} options={{
            tabBarLanel: 'Notification',
            tabBarIcon: ({color,size}) =>(
                <MaterialIcons name="timer" size={24} color={color} />
            ),
        }} /> */}

      </Tab.Navigator>
      </NavigationContainer>
     );
}
 
export default TapNavigator;