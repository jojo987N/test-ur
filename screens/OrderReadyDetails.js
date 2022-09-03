import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { updateOrder } from '../firebase'
import { APP_CONSTANT } from '../global'
import Menus from '../components/Menus'
import Divider from '../components/Divider'
import UserDetails from '../components/UserDetails'
import ConfirmModal from '../components/ConfirmModal'
import {ButtonFoodDone} from '../components/OrderInProgressDetail'

export default function OrderReadyDetails({route}) {
    const {order} = route.params 
    const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
        <UserDetails order={order}/>

        <View style={styles.divider}></View>
        <Menus order={order}/>
         
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
       
        flex: 1
    },

    divider: {
       height: 15,
       backgroundColor: "#e6e6e6"
    },
    buttons: {
      
      position: "absolute",
      bottom: 10,
      width: "100%"
    },
   button: {
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 20
    
   } ,
   text: {
      padding: 15,
      fontSize: 22,
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: 5,
      color: "#e6e6e6"
   }
})