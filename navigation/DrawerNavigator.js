import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Settings from '../screens/Settings';
import { Ionicons, MaterialIcons, FontAwesome} from "@expo/vector-icons";
import Categories from '../screens/Categories';
import Orders from '../screens/Orders';
import Foods from '../screens/Foods';
import { FoodNavigator, OrdersNavigator } from './Staks';
import Dashboard from '../screens/Dashboard';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
     <Drawer.Navigator
      screenOptions={{headerShown: false }}
      useLegacyImplementation={true}
     >
       <Drawer.Screen 
            name = "Dashboard"
            component={Dashboard}
            options={{
                title: "Dashboard",
                headerShown: false,
                drawerIcon: ({focussed, size}) =>(
                  <FontAwesome 
                    name="dashboard"
                    color="black"
                    size={size}

                  />  
                )
            }}
        />
        <Drawer.Screen 
            name = "OrdersScreen"
            component={OrdersNavigator}
            options={{
                title: "Orders",
                headerShown: false,
                drawerIcon: ({focussed, size}) =>(
                  <FontAwesome 
                    name="list-alt"
                    color="black"
                    size={size}

                  />  
                )
            }}
        />
          <Drawer.Screen 
            name = "Categories"
            component={Categories}
             
            options={{
                title: "Categories",
                // headerShown: true,
                drawerIcon: ({focussed, size}) =>(
                  <MaterialIcons 
                    name="category"
                    color="black"
                    size={size}

                  />  
                )
            }}
        />
         <Drawer.Screen 
            name = "FoodsScreen"
            component={FoodNavigator}
            options={{
                title: "Foods",
                headerShown: false,
                drawerIcon: ({focussed, size}) =>(
                  <Ionicons 
                    name="fast-food"
                    color="black"
                    size={size}

                  />  
                )
            }}
        />
         <Drawer.Screen 
            name = "Settings"
            component={Settings}
            options={{
                title: "Settings",
                headerShown: true,
                drawerIcon: ({focussed, size}) =>(
                  <Ionicons 
                    name="settings"
                    color="black"
                    size={size}

                  />  
                )
            }}
        />
     </Drawer.Navigator>
  )
}