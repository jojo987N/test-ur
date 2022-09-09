import { View, Text, TextInput, StyleSheet, Button, Image, Pressable} from 'react-native'
import React, {useContext, useRef, useState} from 'react'
import { addCategory, addProduct } from '../firebase'
import { useNavigation } from '@react-navigation/native';
import PickImage from '../components/PickImage';
import { RestaurantContext } from '../context/RestaurantContext';
import BottomSheet from 'reanimated-bottom-sheet'



export default function AddCategory() {
    const {restaurantData} = useContext(RestaurantContext)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const navigation = useNavigation()
    const [image, setImage] = useState()
    const [url, setUrl] = useState()
    const bs = useRef()
    

  return (
    <>
    <View style={{marginTop: 20}}>
      <Pressable 
      onPress={()=>  bs.current.snapTo(0) }
      style={styles.imageContainer}>
        {/* <Image source={require('../assets/images/dishes.png')} style={{width: 100, height: 100}} /> */}
        <Image source={{uri: image}} style={{width: 100, height: 100}} />

      </Pressable>
      <View style={styles.inputView}>
          <TextInput
          placeholder='Name'
          style={styles.inputText}
          value={name}
          onChangeText={(text)=>setName(text)}/>
      </View>
      <View style={styles.inputView}>
          <TextInput
          placeholder='Description'
          style={styles.inputText}
          value={description}
          onChangeText={(text)=>setDescription(text)}/>
      </View>
      {/* <View style={{...styles.inputView, width: 150}}>
          <TextInput
          placeholder='Price'
          style={styles.inputText}
          value={price}
          onChangeText={
            (text)=>setPrice(text)}/>
      </View> */}
       <View style={{marginVertical: 30, marginHorizontal: 20, marginTop: 40}}>
        <Button title="Pick an image from camera roll" onPress={()=> {}} color="#841584"/>
      </View>
      
      <View style={{marginTop: 20,
          marginHorizontal: 20,
           }}>
             <Button title='Add' onPress={
                 ()=>{
                    addCategory(name, description, url, restaurantData.id)
                 }
             }/>
             </View>
             
    </View>
     
    <BottomSheet 
        ref={bs}
        snapPoints={["40%","90%", 0]}
        renderContent={PickImage(setImage, setUrl)}
        //borderRadius={10}
          
              />
     
    </>
  )
}

const styles = StyleSheet.create({
    imageContainer: { 
      alignItems: "center", 
      opacity: 0.2
    },
    inputView : {
     // backgroundColor: "white",
      marginTop: 40,
      borderWidth: 0.3,
      borderColor: "grey",
      marginHorizontal: 20
    },
    inputText:{
     padding : 10,
     fontSize: 17
    }
})