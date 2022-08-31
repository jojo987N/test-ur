import { View, Text, TextInput, StyleSheet, Button} from 'react-native'
import React, {useState} from 'react'
import { addProduct } from '../firebase'
import { useNavigation } from '@react-navigation/native';
import { APP_CONSTANT, SCREEN } from '../global';
import { colors } from 'react-native-elements';


export default function AddFood() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState()
    const navigation = useNavigation()

  return (
    <View >
      <View style={styles.inputView}>
          <TextInput
          placeholder='Name'
          style={styles.inputText}
          value={name}
          onChangeText={(text)=>setName(text)}/>
      </View>
      <View style={styles.inputView}>
          <TextInput
          placeholder={APP_CONSTANT.TEXT.DESCRIPTION}
          style={styles.inputText}
          value={description}
          onChangeText={(text)=>setDescription(text)}/>
      </View>
      <View style={{...styles.inputView, width: 150}}>
          <TextInput
          placeholder={APP_CONSTANT.TEXT.PRICE}
          style={styles.inputText}
          value={price}
          onChangeText={(text)=>setPrice(text)}/>
      </View>
      <View style={{marginTop: 20,
          marginHorizontal: 20,
           }}>
             <Button title={APP_CONSTANT.TEXT.ADD} onPress={
                 ()=>{
                      
                    navigation.navigate(SCREEN.UPLOAD)
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
      borderColor: colors.grey3,
      marginHorizontal: 20
    },
    inputText:{
     padding : 10,
     fontSize: 17
    }
})