import { View, Text, TextInput, StyleSheet, Button, Image, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { addFood, addProduct } from '../firebase'
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements'
import AddInput from '../components/AddInput';
import { AntDesign } from '@expo/vector-icons';
import Size from '../components/Size';
import { openImagePickerAsync } from '../utils';



export default function AddFood() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState()
  const [dPrice, setDPrice] = useState()
  const [size, setSize] = useState({
    small: "",
    middle: "",
    big: ""
  })
  const navigation = useNavigation()
  const [inputs, setInputs] = useState([])
  const [image, setImage] = useState()
  const [url, setUrl] = useState()


  const pickImage = async () => {

  }

  return (
    <ScrollView style={{marginTop: 20}}>
      <View style={{ alignItems: "center", 
      // opacity: 0.2
    }}>
        <Image source={image?{uri: image}:require('../assets/images/dishes.png')} style={styles.image} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder='Name'
          style={styles.inputText}
          value={name}
          onChangeText={(text) => setName(text)} />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder='Description'
          style={styles.inputText}
          value={description}
          onChangeText={(text) => setDescription(text)} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ ...styles.inputView, width: 150 }}>
          <TextInput
            placeholder='Price'
            style={styles.inputText}
            value={price}
            onChangeText={(text) => setPrice(text)} />
        </View>
        <View style={{ ...styles.inputView, width: 150 }}>
          <TextInput
            placeholder='Discounted Price'
            style={styles.inputText}
            value={dPrice}
            onChangeText={(text) => setDPrice(text)} />
        </View>
      </View>

        {/* <View style={styles.addons}>
        <Text style={{fontSize: 25, fontWeight: "bold"}}>Addons</Text>
        <AntDesign name="pluscircle" size={24} color="black" />
        </View> */}
        <Size title="Size" inputs={inputs} setInputs={setInputs} size={size} setSize={setSize}/>
      {/* <CheckBox

        title={"Small Coke"}
        checked={true}
        //checkedIcon="dot-circle-o"
        // uncheckedIcon="circle-o"
        onPress={() => {
          //  tab[i].checked= true
          // setPtab(tab)
          // if(checkbox)
          // setCheckbox(false)
          // else
          // setCheckbox(true)
          //setCheckbox1(false)
        }}
      />

      <CheckBox

        title={"Small Chocolate Shake"}
        checked={false}
        //checkedIcon="dot-circle-o"
        // uncheckedIcon="circle-o"
        onPress={() => {
          //  tab[i].checked= true
          // setPtab(tab)
          // if(checkbox)
          // setCheckbox(false)
          // else
          // setCheckbox(true)
          //setCheckbox1(false)
        }}
      /> */}
         
       



        <View style={{marginVertical: 30, marginHorizontal: 20, marginTop: 20}}>
        <Button title="Pick an image from camera roll" onPress={()=> openImagePickerAsync(setImage, setUrl)} color="#841584"/>
      </View>


      <View style={{
        marginTop: 10,
        marginHorizontal: 20,
      }}>
        <Button title='Add' onPress={
          () => {

            addFood(name, description, url, price, dPrice, size)
          //  console.log(inputs)
            // addProduct(name, description, price)
            // .then(productRef => navigation.navigate("Upload", {
            //   product_id: productRef.id
            // }))
            
            // navigation.navigate("Upload")
          }
        } />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 100, 
    height: 100,
    overflow: 'hidden',
    borderRadius: 100 / 2,
  },
  addons: {
   marginHorizontal: 20,
   marginVertical: 20,
   flexDirection: "row"
  },
  inputView: {
    // backgroundColor: "white",
    marginTop: 20,
    borderWidth: 0.3,
    borderColor: "grey",
    marginHorizontal: 20
  },
  inputText: {
    padding: 10,
    fontSize: 17
  }
})