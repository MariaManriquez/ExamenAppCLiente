/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

  import VectorIcons from 'react-native-vector-icons/AntDesign';
  import Color from './layout/colors.js';
  import ListTarea from "./views/ListTarea.js";
  import CreateTarea from "./views/CreateTarea.js";
  const Tab = createBottomTabNavigator();

  class App extends React.Component{
   constructor(props){
     super(props);
   }
   listTarea(){
     return <ListTarea/>;
   }
   createTarea(){
    return <CreateTarea/>;
  }
   render(){
     return(
      <NavigationContainer>
        <Tab.Navigator
            screenOptions={({route}) =>({
              tobBarIcon: ({focused, color, size}) =>{
                let iconName;
                switch (route.name) {
                  case 'LISTA DE TAREAS': {
                    if(focused) {
                      return (
                        <VectorIcons 
                        name='bars' 
                        size={23} 
                        color={Color.option1.fourthcolorr}
                        />
                      );
                    } else {
                      return (
                        <VectorIcons 
                        name='bars' 
                        size={24} 
                        color={Color.option1.thirthcolor} 
                        />
                      );
                    }
                  }
                  case 'CREAR TAREA': {
                    if(focused) {
                      return(
                        <VectorIcons 
                        name='create' 
                        size={24} 
                        color={Color[Color.key].fourthcolor} 
                        />
                      );
                    } else {
                      return (
                        <VectorIcons 
                        name='create' 
                        size={23} 
                        color={Color[Color.key].thirthcolor}  
                        />
                      );
                    }
                  }
                }
              },
            })}>
          <Tab.Screen name="LISTA DE TAREAS" component={this.listTarea} />
          <Tab.Screen name="CREAR TAREA" component={this.createTarea} />
        </Tab.Navigator>
      </NavigationContainer>
     ); 
   }
 }
export default App;
