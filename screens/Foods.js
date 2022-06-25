import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import {getFoods} from '../firebase'
import { AntDesign, Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function Foods() {

    const [foods, setFood] = useState([])
    const navigation = useNavigation()

    useEffect(()=>{
        getFoods().then((foods)=>setFood(foods)) 
      }, [])
  return (
    <View>
       
      <ScrollView>
        <View>
            {foods.map((food, index)=>{
              // console.log(food, index)
              return (
                <View key={index} style={{
                  borderBottomWidth: 0.5,
                  padding: 30,
                  marginHorizontal: 30
                }}>
                <Text style={{
                  fontSize: 20
                }}>{food.name}</Text>
                </View>
              )
            })}
      
        </View>
      </ScrollView>
      <TouchableOpacity style={{
        position: "absolute",
        bottom:0,
        right: 0,
        margin: 30
      }}
      onPress={()=>navigation.navigate("AddFood")}>
      <AntDesign name="pluscircle" size={44} color="blue" />
       
         
      
      </TouchableOpacity>
    </View>
  )
}