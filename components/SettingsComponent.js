import { View, Text, SafeAreaView, StatusBar, Image, TextInput, StyleSheet, TouchableOpacity, Pressable} from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { auth, getDriverInfos} from '../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserContext } from '../context/UserContext'

export default function SettingsComponent({navigation, bs}) {

 const {setUserData, userData} = useContext(UserContext)


  const [email, setEmail] = useState(userData.email)
  const [name, setName] = useState(userData.name)
  const [phone, setPhone] = useState(userData.phone)
  const [carNumber, setCarNumber] = useState(userData.carNumber)
  const [carName, setCarName] = useState(userData.Car)
  const [password, setPassword] = useState('')

    

  const SignInUser = async ()=>{

    const re = await signInWithEmailAndPassword(auth, email, password)
      
      getDriverInfos().then(docs => {

        AsyncStorage.setItem('driverData', JSON.stringify(docs[0]))

          setUserData(docs[0])

          navigation.navigate('DrawerNavigator')
        
         
      })

}

// useEffect(()=>{

   
//   const checkAuth = onAuthStateChanged(auth, (user)=>{
      
//     if (user) {
//       AsyncStorage.getItem("driverData")
//         .then((value) => {
         

//             let driverData = JSON.parse(value)

//             setUserData(driverData)

           
         

//         })
         
//       }
//   })
//   return checkAuth
// }, [])

  return (
    <SafeAreaView style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "#e0ebeb",
      flex: 1
    }}>
       <View style={{
         alignItems: "center",
         marginTop: 20
       }}>
        <Pressable onPress={
        ()=>{
            
            bs.current.snapTo(0)}
      }>
             <Image 
       source={require('../assets/images/shopping-bag.png')} 
       style={{
         width: 100,
         height: 100
       }}
       />
       
        </Pressable>
      

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
         <MaterialIcons name="person" size={20} color="#3d5c5c" style={{
           marginLeft: 6,
         }}/>
          <TextInput 
          placeholder='Email' 
          value={password}
          onChangeText={(text)=>setEmail(text)}
          style={styles.textInput}/>
           
         </View>

         

         

         <View style={styles.textInputContainer}>
         <MaterialIcons name="person" size={20} color="#3d5c5c" style={{
           marginLeft: 6,
         }}/>
          <TextInput 
          placeholder='Email' 
          value={name}
          onChangeText={(text)=>setEmail(text)}
          style={styles.textInput}/>
           
         </View>

         <View style={styles.textInputContainer}>
         <MaterialIcons name="person" size={20} color="#3d5c5c" style={{
           marginLeft: 6,
         }}/>
          <TextInput 
          placeholder='Email' 
          value={phone}
          onChangeText={(text)=>setEmail(text)}
          style={styles.textInput}/>
           
         </View>

         <View style={styles.textInputContainer}>
         <MaterialIcons name="person" size={20} color="#3d5c5c" style={{
           marginLeft: 6,
         }}/>
          <TextInput 
          placeholder='Email' 
          value={carName}
          onChangeText={(text)=>setEmail(text)}
          style={styles.textInput}/>
           
         </View>
         <View style={styles.textInputContainer}>
         <MaterialIcons name="person" size={20} color="#3d5c5c" style={{
           marginLeft: 6,
         }}/>
          <TextInput 
          placeholder='Email' 
          value={carNumber}
          onChangeText={(text)=>setEmail(text)}
          style={styles.textInput}/>
           
         </View>

         <TouchableOpacity  onPress={()=>SignInUser()}>
           <View style={{
             backgroundColor: "#0080ff",
             marginHorizontal: 25,
             borderRadius: 5,
             marginTop: 30
           
           }}>
             <Text style={{
               padding: 16,
               textAlign: "center",
               color: "white",
               fontWeight: "bold",
               fontSize: 15,
               letterSpacing: 2
             }}>Update</Text>
           </View>
         </TouchableOpacity>
         

       </View>
 
    </SafeAreaView>
      
     
  )
}

const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: "row",
     
     backgroundColor: "white",
     marginHorizontal: 25,
     
    borderRadius: 5,
     marginTop: 20,
     alignItems: "center"
     
     
  },
  textInput: {
    
    width: "90%",
    padding: 10
  }
})