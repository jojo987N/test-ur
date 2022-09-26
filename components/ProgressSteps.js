import { View, Text, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import OrderCountDown from './OrderCountDown'
import { onSnapshot } from 'firebase/firestore'
import { ordersCol } from '../firebase'

export default function ProgressSteps({route, remainingTime}) {
     const {order} = route.params
  return (
    <View>
        <View style={styles.container1}>
         <View style={{...styles.col, }}>
          <View style={{backgroundColor: "white", borderRadius: 50}}>
              <AntDesign name='checkcircle' color="green" size={24} />
          </View>
         </View>
         <View style={{...styles.col, }}>

            {remainingTime?<OrderCountDown order={order} remainingTime={remainingTime} style={{backgroundColor: "white", height:49, color:"black"}}/>
            :<AntDesign name='checkcircle' color="green" size={24} />}
        </View>
         <View style={styles.col}>
             <View style={{height: 20, aspectRatio: 1, backgroundColor: "#e6e6e6", borderRadius: 50, borderColor:"grey", borderWidth:0.5}}></View>
             </View>
        </View>
         <View style={{borderWidth: 0.5, position: "relative",
          top: -15, zIndex: -1, borderColor: "grey"
          }}></View>
        <View style={styles.container3}>
         <View style={styles.col}>
             <Text style={styles.statusProgressText}>ORDER ACCEPTED</Text>
             <Text style={styles.time}>2:28 PM</Text>
        </View>
         <View style={styles.col}>
             <Text style={styles.statusProgressText}>PICKING UP</Text>
             <Text style={styles.time}>2:54 PM</Text>
        </View>
         <View style={styles.col}>
             <Text style={styles.statusProgressText}>DELIVERY ESTIMATE</Text>
             <Text style={styles.time}>2:58 PM</Text>
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container1: {
        flexDirection: "row",
         
    },
    container2: {
       
        
       
    },
    container3: {
        flexDirection: "row"
    },
    col: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    statusProgressText:{
      fontWeight: "bold",
      color:"grey",
      fontSize: 10
    },
    time: {
       fontWeight: "bold" 
    }

})