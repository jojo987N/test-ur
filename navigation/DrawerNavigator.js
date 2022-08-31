import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { Ionicons, MaterialIcons, FontAwesome, Entypo} from "@expo/vector-icons";
import Categories from '../screens/Categories';
import Orders from '../screens/Orders';
import Foods from '../screens/Foods';
import { CategoriesNavigator, FoodNavigator, OrdersNavigator } from './Staks';
import Dashboard from '../screens/Dashboard';
import SignIn from '../screens/SignIn';
import DrawerContent from '../components/DrawerContent';
import { APP_CONSTANT, COLORS, ICON, SCREEN } from '../global';
import NewOrders from '../screens/NewOrders';
import OrdersInProgress from '../screens/OrdersInProgress';
import OrdersReady from '../screens/OrdersReady';
import { colors } from 'react-native-elements';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
     <Drawer.Navigator
      screenOptions={{headerShown: false }}
      drawerContent= {props => <DrawerContent {...props}/>}
      useLegacyImplementation={true}
     >
       <Drawer.Screen 
            name = {SCREEN.DASHBOARD}
            component={Dashboard}
            options={{
                title: APP_CONSTANT.TEXT.DASHBOARD,
                headerShown: false,
                drawerIcon: ({focussed, size}) =>(
                  <FontAwesome 
                    name={ICON.DASHBOARD}
                    color={COLORS.black}
                    size={size}

                  />  
                )
            }}
        />
        <Drawer.Screen 
            name = {SCREEN.ORDERS_SCREEN}
            // component={OrdersNavigator}
            component={Orders}
            options={{
                title: APP_CONSTANT.TEXT.ORDERS,
                headerShown: false,
                drawerIcon: ({focussed, size}) =>(
                  <FontAwesome 
                    name={ICON.ORDERS}
                    color={COLORS.black}
                    size={size}

                  />  
                )
            }}
        />
        <Drawer.Screen 
            name = {SCREEN.NEW_ORDERS}
            component={NewOrders}
            options={{
                title: APP_CONSTANT.TEXT.NEW_ORDER,
                headerShown: false,
                drawerIcon: ({focussed, size}) =>(
                  <FontAwesome 
                    name={ICON.NEW_ORDERS}
                    color={COLORS.black}
                    size={size}

                  />  
                )
            }}
        />
        <Drawer.Screen 
            name = {SCREEN.ORDERS_IN_PROGRESS}
            component={OrdersInProgress}
            options={{
                title: APP_CONSTANT.TEXT.ORDERS_IN_PROGRESS,
                headerShown: false,
                drawerIcon: ({focussed, size}) =>(
                  <FontAwesome 
                    name={ICON.ORDERS_IN_PROGRESS}
                    color={COLORS.black}
                    size={size}

                  />  
                )
            }}
        />
         <Drawer.Screen 
            name = {SCREEN.READY_FOR_PICKUP}
            component={OrdersReady}
            options={{
                title: APP_CONSTANT.TEXT.READY_FOR_PICKUP,
                headerShown: false,
                drawerIcon: ({focussed, size}) =>(
                  <FontAwesome 
                    name={ICON.READY_FOR_PICKUP}
                    color={COLORS.black}
                    size={size}

                  />  
                )
            }}
        />
          <Drawer.Screen 
            name = {SCREEN.CATEGORIES_NAVIGATOR}
            // component={Categories}
            component={CategoriesNavigator}
            options={{
                title: APP_CONSTANT.TEXT.CATEGORIES,
                // headerShown: true,
                drawerIcon: ({focussed, size}) =>(
                  <MaterialIcons 
                    name={ICON.CATEGORY}
                    color={COLORS.black}
                    size={size}

                  />  
                )
            }}
        />
         <Drawer.Screen 
            name = {SCREEN.FOODS_NAVIGATOR}
            component={FoodNavigator}
            options={{
                title: APP_CONSTANT.TEXT.FOODS,
                headerShown: false,
                drawerIcon: ({focussed, size}) =>(
                  <Ionicons 
                    name={ICON.FOODS}
                    color={COLORS.black}
                    size={size}

                  />  
                )
            }}
        />
         
         <Drawer.Screen 
            name = {SCREEN.SIGN_OUT}
            component={SignIn}
            options={{
                title: APP_CONSTANT.TEXT.SIGN_OUT,
                headerShown: false,
                drawerIcon: ({focussed, size}) =>(
                  <Entypo 
                    name={ICON.SIGN_OUT}
                    color={colors.black}
                    size={size}

                  />  
                )
            }}
        />
     </Drawer.Navigator>
  )
}