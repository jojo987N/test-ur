 import { View, Text, StatusBar, SafeAreaView} from 'react-native'
 import React from 'react'
//import Home from './screens/Settings'
import RootNavigation from './navigation'
import { StatusBar } from 'expo-status-bar';

 
 export default function App() {
   return (
    <SafeAreaView style={{
      // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      // backgroundColor: "#eee",
      flex: 1
    }}>

     <RootNavigation />
     <StatusBar style="auto" />

    </SafeAreaView>
   )
 }