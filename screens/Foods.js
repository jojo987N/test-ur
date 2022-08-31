import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import {getFoods} from '../firebase'
import { AntDesign, Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import MenuNavigation from '../components/MenuNavigation';
import Loading from '../components/Loading';
import { APP_CONSTANT } from '../global';
import AddButton from '../components/AddButton';


export default function Foods() {

    const [foods, setFoods] = useState()
    const navigation = useNavigation()

    useEffect(()=>{
      getFoods().then((foods)=>setFoods(foods)) 
      }, [])
  return (
    <> 
    <View>
       <View style={styles.header}>
          <MenuNavigation navigation={navigation}/>
          <Text style={styles.title}>{APP_CONSTANT.TEXT.FOODS}</Text>
        </View>
      <ScrollView>
        
       {foods?<View>
            {foods.map((food, index)=>{
               
              return (
                <View key={index} style={styles.row}>
                  <View style={{flex: 1}}>
                    <Image style={styles.image} source={{uri: food.image}} />
                  </View>
                  <View  style={{flex: 2}}>
                      <Text style={{
                      fontSize: 20
                    }}>{food.name}</Text>
                  </View>
                
                </View>
              )
            })}
      
        </View>:<Loading />}
      </ScrollView>
       
    </View>
    <AddButton />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    marginLeft: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
  row: {
    borderBottomWidth: 0.5,
    padding: 30,
    flexDirection: "row"
  },
  image: {
    height: 40, 
    aspectRatio: 1,
    borderRadius: 40
  }
})