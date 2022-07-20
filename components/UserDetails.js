import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome} from '@expo/vector-icons'

export default function UserDetails({order}) {
  return (
    // <View style={styles.container}>
    //     <Infos  info={order.User.name} icon="person"/>
    //     <Infos  info={order.User.phone} icon="call"/>
    //     <Infos  info={order.User.address}  icon="map-marker"/>
    // </View>
    <View>
       <View style={styles.container}>
         <View style={styles.container1}>
           <Image style={{height: 40, aspectRatio: 1}} source={{uri: order.User.image}}/>
           <View style={styles.name_address}>
             <Text style={styles.name}>{order.User.name}</Text>
             <Text style={styles.address}>{order.User.address}</Text>
           </View>
         </View>
         <TouchableOpacity>
           <Ionicons name="call" size={30} color="black"/>
         </TouchableOpacity>
         
       </View>
    </View>
  )
}

const Infos = ({info, icon})=> (
 
<View style={styles.info_icon}>
 
    {icon === "map-marker"?( <FontAwesome name={icon} size={20} color="black" />): 
    (<Ionicons name={icon} size={20} color="black"/>)}
     
    <Text style={styles.info}>{info}</Text>
</View>
 
)


const styles = StyleSheet.create({

    container: {
       flexDirection: "row",
       justifyContent: "space-between",
       marginHorizontal: 20,
       //marginVertical: 30,
      // borderBottomWidth: 20,
       paddingVertical: 30,
      // borderBottomColor: "#e6e6e6"

    },
    container1: {

      flexDirection: "row"

    },
    name_address: {
      marginLeft: 10
    },
    name: {
      fontWeight: "bold",
      fontSize: 25
    },
    address: {
      color: "grey"
    }
    // container: {
    //     //marginLeft: 10,
    //  marginHorizontal: 20
         
    // },
    // info_icon: {
    //    flexDirection: "row",
    //    alignItems: "center",
    //    paddingVertical: 10,
    //    borderBottomWidth: 0.3
    // },
    // info: {
    //  paddingLeft: 10
    // },
})