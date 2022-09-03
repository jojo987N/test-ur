import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import {getCategories} from '../firebase'
import { AntDesign, Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import MenuNavigation from '../components/MenuNavigation';
import Loading from '../components/Loading';
import { APP_CONSTANT, COLORS, ICON, SCREEN } from '../global';


export default function Categories({navigation}) {

    const [categories, setCategories] = useState()
    

    useEffect(()=>{
      getCategories().then((categories)=>setCategories(categories)) 
      }, [])
  return (
    <> 
    <View>
       <View style={styles.header}>
          <MenuNavigation navigation={navigation}/>
          <Text style={styles.title}>{APP_CONSTANT.TEXT.CATEGORIES}</Text>
        </View>
      <ScrollView>
        
       {categories?<View>
            {categories.map((category, index)=>{
              
              return (
                <View key={index} style={{
                  borderBottomWidth: 0.5,
                  padding: 30,
                 
                  flexDirection: "row"
                }}>
                  <View style={{flex: 1}}>
                    <Image style={styles.image} source={{uri: category.image}} />
                  </View>
                  <View  style={{flex: 2}}>
                      <Text style={{
                      fontSize: 20
                    }}>{category.name}</Text>
                  </View>
                
                </View>
              )
            })}
      
        </View>:<Loading />}
      </ScrollView>
       
    </View>
    <TouchableOpacity style={{
        position: "absolute",
        bottom:0,
        right: 0,
        margin: 30
      }}
      onPress={()=>navigation.navigate(SCREEN.UPDATECATEGORY)}>
      <AntDesign name={ICON.ADD_BUTTON} size={44} color={COLORS.ADD_BUTTON} />
       
         
      
      </TouchableOpacity>
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
  image: {
    height: 40, 
    aspectRatio: 1,
    borderRadius: 40
  }
})