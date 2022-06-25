import { View, Text,} from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Settings';
import DrawerNavigator from './DrawerNavigator';
import UpdateCategory from '../screens/UpdateCategory';
import { CategoriesNavigator } from './Staks';
import SignIn from '../screens/authScreens/SignIn';
import Upload from '../screens/Upload';


export default function RootNavigation() {

    const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator
         screenOptions={{headerShown: false }}>
        
        {/* <Stack.Screen name="CategoriesNavigator" component={CategoriesNavigator}/> */}
        {/* <Stack.Screen name="Home" component={Home}/> */}
        {/* <Stack.Screen name="UpdateCategory" component={UpdateCategory}/> */}
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
        <Stack.Screen name="Upload" component={Upload}/>

         

        </Stack.Navigator>

    </NavigationContainer>
     
  )
}