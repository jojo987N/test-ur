import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import ProgressSteps from './ProgressSteps'
import MapView, { Callout, Marker } from 'react-native-maps'
import Divider from '../components/Divider'
import { ArrowBack } from './ArrowBack'
import { AntDesign } from '@expo/vector-icons'

export default function OrderInProgressDetail({route, navigation}) {

    const {order} = route.params

    console.log(order.Restaurant.lat, order.Restaurant.lng)



  return (
    <View style={{flex: 1}}>
        <View style={styles.header}>
          <View style={{...styles.header1, flex: 3}}>
            <ArrowBack navigation={navigation}/>
            <Text style={styles.title}>Order {order.orderId.toUpperCase()}</Text>
            
          </View>
            <TouchableOpacity 

            onPress={()=>navigation.navigate("OrderDetails", { order: order, orderStatus: "inProgress"})}
            
            style={{...styles.header1,justifyContent: "space-evenly"}}>
               
                <Text style={{color: "#A30000", fontWeight: "bold", fontSize: 13}}>Details</Text>

               
              <AntDesign
              name="down"
              color="black"
              size={15}
                        />
            </TouchableOpacity>
           
        </View>
       <ProgressSteps route={route}/>

       <View style={styles.mapContainer}>
         {/* <MapView
         
          initialRegion={{
            latitude: order.Restaurant.lat,
            longitude: order.Restaurant.lng,
            latitudeDelta: 0.01122,
            longitudeDelta: 0.00621
          }}
          style={{width: "100%", height: 300}}
          >

          <Marker title="nass" description="nasso"
            coordinate={{
              latitude: order.Restaurant.lat,
              longitude: order.Restaurant.lng,
            }}

          >
            <Image source={require('../assets/images/marker1.png')} style={{
              width: 40,
              height: 40
            }} />


       <Callout  tooltip>
         <View style={{backgroundColor: "#d9d9d9", width: "100%"  }}>
           <Text style={{color: "black", fontSize: 10, fontWeight: "bold"}}>PICKUP</Text>
          
           </View>
           <View style={{backgroundColor: "white",   }}>
           <Text style={{color: "black", fontSize: 10, fontWeight: "bold"}}>2:54 PM</Text>
          
           </View>
            
         
       </Callout>
          </Marker>


          </MapView> */}
       </View>

       <View style={styles.customer_courier_Infos}>
         <View>
           <Text style={styles.infosTitle}>CUSTOMER</Text>
           <Text style={styles.infosName}>{order.User.name}</Text>
           <Text style={styles.infosPhone}>{order.User.phone}</Text>
         </View>
         <View>
           <Text style={styles.infosTitle}>COURIER</Text>
           <Text style={styles.infosName}>--</Text>
         </View>
       </View>

       <Divider />

       <ButtonFoodDone />
       


       
    </View>
  )
}

export const ButtonFoodDone = ()=>  <TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>FOOD IS DONE</Text>
</TouchableOpacity>


const styles = StyleSheet.create({

   header: {
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     marginVertical: 20,
     marginBottom: 30,

   },
   header1: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    //borderWidth: 1,
   // justifyContent: "space-between"
   marginLeft: 10,
     
   },
    title: {
      fontSize: 25,
      marginLeft: 20,
    //  marginTop: 10,
    //  marginBottom: 30
    },
    mapContainer: {
      marginHorizontal: 20,
      marginTop: 40
    },
    customer_courier_Infos: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
      marginBottom: 10
    },
    infosTitle: {
      fontWeight: "bold",
      color:"grey",
      fontSize: 10,
      marginTop: 10
    },
    infosName: {
      fontWeight: "bold",
      marginTop: 10
    },
    infosPhone: {
      color: "grey",
      marginTop: 5
    },
    button: {
      backgroundColor: "#A30000",
      marginHorizontal: 10,
      borderRadius: 5,
      marginTop: 20,
       
    },
    buttonText: {
      color: "white",
      padding: 15,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 15,
      letterSpacing: 2,

    }
})