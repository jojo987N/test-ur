import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native'
import React, {useState, useEffect} from 'react'
import { onSnapshot} from 'firebase/firestore'
import { ordersCol} from '../firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { APP_CONSTANT, COLORS } from '../global'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native'
import { language, currency } from '../global';
import { FlatList } from 'react-native-gesture-handler'
import OrderCountDown from '../components/OrderCountDown'
import { Feather } from '@expo/vector-icons'
import Loading from '../components/Loading'

  

export default function Orders({route}) {

  const navigation = useNavigation() 

 const [orders, setOrders] = useState()
  
  useEffect(()=>{

    AsyncStorage.getItem("managerId").
    then((value)=>{

        

        onSnapshot(ordersCol, (snapshot)=>{

            setOrders(snapshot.docs.map((doc)=> ({...doc.data(), id: doc.id })))

        })

    })
     
  }, [])

   

  return (
      <>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                 <Feather name="menu" size={24} color={COLORS.white} style={styles.feather}/>
            </TouchableOpacity>
             
              <Text style={styles.headerTitle}>{APP_CONSTANT.ONLINE}</Text>
          </View>
          <View style={styles.container}>
          

      </View>
     </>
       

  )
}

 

 



const pendingBackground = ()=>{

    return (
        <ImageBackground
                    style={{width: "100%"}}
                    
                    source={require("../assets/images/pending.jpg")}
                   
                    
                  >

                  </ImageBackground>

    )
}

const renderStatus = (status)=>{

   if (status === "new")
   return (
       <View style={{height: 40, width: 100, alignSelf: "center", borderRadius: 20, backgroundColor: "#00cc00", justifyContent: "center"}}>
           <Text style={{color:"white", textAlign: "center", fontSize: 15, fontWeight: "bold", }}>Accept</Text>
       </View>
       
    
    
    
    
    
    
   )
   if(status === APP_CONSTANT.CONFIRMED)
   return (
       <View style={styles.status_text_container}>
           <Text style={styles.status_text}>Accepted</Text>
       </View>
        
   )
}

 
 
const styles = StyleSheet.create({

    container : {
        flex: 1,
       
       backgroundColor: "#000033",
       paddingHorizontal: 10
    },
    header: {
        backgroundColor: 'white',
        flexDirection: "row",
        
        alignItems: "center",
        backgroundColor: "black"
    },
    headerTitle: {
     marginLeft: 20,
     fontSize: 23,
     fontWeight: "bold",
     padding: 20,
     color: "white"
    },
    title: {
      fontWeight: "bold",
      paddingTop: 10,
      color: "white"
    },
    col_head: {
       color: "black"
    },
    col: {
        flex: 1,
        fontSize: 15,
        paddingHorizontal: 2,
        paddingVertical: 15,
        fontWeight: "bold",
       
        textAlign: "center",
       
       paddingVertical: 30,
       color: "#f2f2f2"
        
    },
    
    feather: {
        marginLeft: 10
    },
    quantity: {
        flex: 1
    },
    quantityText: {color: "white", textAlign: "center", fontWeight: "bold", fontSize: 18},

    animation: {
       
       position: "absolute",
        height: 400,
       
        width: 400,
        
       top: -90,
       left: -70
        
         
        
    },
    status:{
        flex: 1,
        
        
        alignItems: "center"
        
    },
    status_text: {
     fontWeight: "bold",
     textAlign: "center",
     padding: 5,
     color: "white"
    },
    status_text_container:{
       borderWidth: 1,
       borderRadius: 20,
       marginHorizontal: 20,
       backgroundColor: "green"

    },
    
    avatarImage: {
        height: 50, 
        width: 50,
    }
})