import { View, Text, TextInput, StyleSheet, Button, Image} from 'react-native'
import React, {useState} from 'react'
import { addProduct } from '../firebase'
import { useNavigation } from '@react-navigation/native';


export default function AddCategory() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()
    const navigation = useNavigation()

    const pickImage = async () => {

    }

  return (
    <View style={{marginTop: 20}}>
      <View style={{ alignItems: "center", opacity: 0.2}}>
        <Image source={require('../assets/images/dishes.png')} style={{width: 100, height: 100}} />
      </View>
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
          onChangeText={(text)=>setPrice(text)}/>
      </View> */}
      <View style={{marginVertical: 30, marginHorizontal: 20, marginTop: 40}}>
        <Button title="Pick an image from camera roll" onPress={pickImage} color="#841584"/>
      </View>
      
      <View style={{marginTop: 20,
          marginHorizontal: 20,
           }}>
             <Button title='Add' onPress={
                 ()=>{
                      
                    // addProduct(name, description, price)
                    // .then(productRef => navigation.navigate("Upload", {
                    //   product_id: productRef.id
                    // }))
                    // navigation.navigate("Upload")
                 }
             }/>
             </View>
    </View>
  )
}

const styles = StyleSheet.create({
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