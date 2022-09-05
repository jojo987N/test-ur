import { View, Text, } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
 import DrawerNavigator from './DrawerNavigator';
 import UpdateCategory from '../screens/UpdateCategory';
import { CategoriesNavigator, OrdersNavigator } from './Staks';
import SignIn from '../screens/SignIn';
import Upload from '../screens/Upload';
import { RestaurantProvider } from '../context/RestaurantContext';
import OrderInProgressDetail from '../components/OrderInProgressDetail';
import OrderDetails from '../screens/OrderDetails';
import { SCREEN } from '../global';


export default function RootNavigation() {

   const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <RestaurantProvider >
        <Stack.Navigator
          screenOptions={{ headerShown: false }}>


          <Stack.Screen name={SCREEN.SIGN_IN} component={SignIn} />
          <Stack.Screen name={SCREEN.DRAWER_NAVIGATOR} component={DrawerNavigator} />
          <Stack.Screen name={SCREEN.UPLOAD} component={Upload} />
          <Stack.Screen name={SCREEN.ORDER_IN_PROGRESS_DETAILS} component={OrderInProgressDetail} />
          <Stack.Screen name={SCREEN.ORDER_DETAILS} component={OrderDetails} />



        </Stack.Navigator>
      </RestaurantProvider>
    </NavigationContainer>

  )
}