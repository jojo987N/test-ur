import { View, Text, SafeAreaView, StatusBar, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { auth, getRestaurantId} from '../../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RestaurantContext } from '../../context/RestaurantContext'

export default function SignIn({navigation}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {setRestaurantData} = useContext(RestaurantContext)



  const SignInUser =  ()=>{
    
    signInWithEmailAndPassword(auth, email, password)
    .then((re)=>{

      getRestaurantId(re.user.uid)
      .then(snapshot => {

        if(snapshot.docs[0]){

          setRestaurantData({...snapshot.docs[0].data(), email: re.user.email})

          AsyncStorage.setItem('managerId', re.user.uid)
         .then(()=> navigation.navigate('DrawerNavigator'))
      
        // AsyncStorage.setItem('managerId', snapshot.docs[0].id)
        // .then(()=> navigation.navigate('DrawerNavigator'))

        }
         
        
      })
        //  
         //console.log(re.user.uid)
          
    })

    
}

useEffect(()=>{

  // AsyncStorage.getItem("managerId")
  // .then((value)=>{
  //   if(value)
  //   navigation.navigate('DrawerNavigator')
  // })
   
}, [])

  return (
    <SafeAreaView style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "#e0ebeb",
      flex: 1
    }}>
       <View style={{
         alignItems: "center",
         marginTop: 50
       }}>

       {/* <Image 
       source={require('../../assets/images/shopping-bag.png')} 
       style={{
         width: 100,
         height: 100
       }}/> */}

       <Text style={{fontSize: 25, fontWeight: "bold", color: "#3d5c5c",
      letterSpacing: 5}}>Delivery App</Text>

       </View>
       <View style={{
         marginTop: 40
       }}>

         <View style={styles.textInputContainer}>
         <MaterialIcons name="person" size={20} color="#3d5c5c" style={{
           marginLeft: 6,
         }}/>
          <TextInput 
          placeholder='Email' 
          value={email}
          onChangeText={(text)=>setEmail(text)}
          style={styles.textInput}/>
           
         </View>

         <View style={styles.textInputContainer}>
         <MaterialIcons name="lock" size={20} color="#3d5c5c" style={{
           marginLeft: 6,
         }}/>
          <TextInput 
          placeholder='Password' 
          value={password}
          onChangeText={(text)=>setPassword(text)}
          style={styles.textInput}
          secureTextEntry/>
           
         </View>

         <TouchableOpacity  onPress={()=>SignInUser()}>
           <View style={{
             backgroundColor: "#0080ff",
             marginHorizontal: 25,
             borderRadius: 5,
             marginTop: 20
           
           }}>
             <Text style={{
               padding: 16,
               textAlign: "center",
               color: "white",
               fontWeight: "bold",
               fontSize: 15,
               letterSpacing: 2
             }}>Sign In</Text>
           </View>
         </TouchableOpacity>
         

       </View>
 
    </SafeAreaView>
      
     
  )
}

