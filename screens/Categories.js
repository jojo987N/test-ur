import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import {getCategories} from '../firebase'
import { AntDesign, Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import MenuNavigation from '../components/MenuNavigation';
import Loading from '../components/Loading';
import { CategoriesContext } from '../context/CategoriesContext';
import { RestaurantContext } from '../context/RestaurantContext';


export default function Categories({navigation}) {

    // const [categories, setCategories] = useState()
    const {categories, setCategories} = useContext(CategoriesContext)
    const {restaurantData} = useContext(RestaurantContext)
    const [addButtons, setAddButtons] = useState()
    // const [addButton, setAddButton] = useState({
    //   text: "Add",
    //   backgroundColor: "blue"
    // })
    // const navigation = useNavigation()
    useEffect(()=>{
      getCategories(restaurantData.id).then((categories)=>{
        setCategories(categories)

        setAddButtons(new Array(categories.length).fill({
          text: "Add",
          backgroundColor: "blue",
        }))
      }) 

   
    }, [])
  return (
    <> 
    <View>
       <View style={styles.header}>
          <MenuNavigation navigation={navigation}/>
          <Text style={styles.title}>Categories</Text>
        </View>
      <ScrollView>
        
       {categories && addButtons?<View>
            {categories.map((category, index)=>{
              //  console.log(category.image, index)
              return (
                <View key={index} style={{
                  borderBottomWidth: 0.5,
                  padding: 30,
                 // marginHorizontal: 30,
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
                  <TouchableOpacity 
                  onPress={()=> {
                    setAddButtons([...addButtons.slice(0, index),
                      {
                      text: addButtons[index].text === "Add"?"Remove":"Remove",
                      backgroundColor: addButtons[index].text === "Add"?"blue":"red"
                    } ,
                    ...state.slice(index + 1)])
                  }}
                  style={{...styles.addButton, backgroundColor: addButtons[index].backgroundColor}}>
                    <Text style={{color: "white", fontWeight: "bold"}}>{addButtons[index].text}</Text>
                  </TouchableOpacity>
                
                </View>
              )
            })}
      
        </View>:<Loading />}
      </ScrollView>
       
    </View>
    {/* <TouchableOpacity style={{
        position: "absolute",
        bottom:0,
        right: 0,
        margin: 30
      }}
      onPress={()=>navigation.navigate("AddCategory")}>
      <AntDesign name="pluscircle" size={44} color="blue" />
       
         
      
      </TouchableOpacity> */}
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
  },
  addButton: {
    justifyContent: "center",
    width: 100,
    height: 50,
    alignItems: "center",
    borderRadius: 10
    }
})