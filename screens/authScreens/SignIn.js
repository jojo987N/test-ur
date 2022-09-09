import { View, Text, SafeAreaView, StatusBar, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { auth, getRestaurantId, userInfos} from '../../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from "react-native-animatable"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RestaurantContext } from '../../context/RestaurantContext'
import Loading from '../../components/Loading'




export default function SignIn({navigation, route}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {restaurantData,setRestaurantData} = useContext(RestaurantContext)
  const [loading, setLoading] = useState(false)


  if(route.params && route.params.param === "SignOut")
  AsyncStorage.getAllKeys().then(k => AsyncStorage.multiRemove(k))
  .then(()=>{
  signOut(auth)
})



  const SignInUser =  ()=>{
       setLoading(true)
    try{
    
     
    signInWithEmailAndPassword(auth, email, password)
    .then((re)=>{

      
        //  
         //console.log(re.user.uid)
          
    })

  }catch(e){   // en cours
    setLoading(false)
    console.log(e)
    
    }

    
}

useEffect(()=>{

  const checkAuth = onAuthStateChanged(auth, (user)=>{
       
      if(user){
       getRestaurantId(user.uid)
       .then(snapshot => {
 
         if(snapshot.docs[0]){
 
           setRestaurantData({id: snapshot.docs[0].id, ...snapshot.docs[0].data(),  email: user.email})
           setLoading(false)
           navigation.navigate('DrawerNavigator')

          //  AsyncStorage.setItem('managerId', user.uid)
          // .then(()=> {
          //   setLoading(false)
          //   navigation.navigate('DrawerNavigator')
          //  })
       
 
         } 
          
         
       })
        


      } 
  })
  return checkAuth
   
}, [])

  if(loading)
  return <Loading />

  return (
      <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.title}>Restaurant Owner !</Text>
          </View>

          <Animatable.View style={styles.footer} animation="fadeInUpBig">

              <View style={styles.textInputContainer}>
                  <MaterialIcons name="person" size={20} color="#3d5c5c" style={{
                      marginLeft: 6,
                  }} />
                  <TextInput
                      placeholder='Email'
                      value={email}
                      onChangeText={(text) => setEmail(text)}
                      style={styles.textInput} />

              </View>

              <View style={styles.textInputContainer}>
                  <MaterialIcons name="lock" size={20} color="#3d5c5c" style={{
                      marginLeft: 6,
                  }} />
                  <TextInput
                      placeholder='Password'
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                      style={styles.textInput}
                      secureTextEntry />

              </View>

              <TouchableOpacity onPress={() => SignInUser()}>

              <LinearGradient
                          colors={['#948E99', '#2E1437']}
                          style={styles.signInButton} >
                          <Text style={{...styles.signInText, color: 'white'}}>Sign In</Text>
              </LinearGradient>
                  {/* <View style={styles.signUpButton}>
                      <Text style={{
                          padding: 16,
                          textAlign: "center",
                          color: "white",
                          fontWeight: "bold",
                          fontSize: 15,
                          letterSpacing: 2
                      }}>Sign In</Text>
                  </View> */}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>

              <LinearGradient
                          colors={['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea']}
                          style={styles.signInButton} >
                          <Text style={styles.signInText}>Sign Up</Text>
              </LinearGradient>
              
              </TouchableOpacity>


          </Animatable.View>

      </View>
      
     
  )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: "#b3b3b3"
    },

    header: {
        alignItems: "center",
       // marginTop: 50
       flex: 1,
       paddingBottom: 50,
       justifyContent: "flex-end"
    },
    title: {
        fontSize: 25, fontWeight: "bold", color: "#3d5c5c",
        letterSpacing: 5
    },
    footer: {
      flex: 3,
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
  textInputContainer: {
    flexDirection: "row",
    //borderWidth : 1,
     backgroundColor: "white",
     marginHorizontal: 25,
     //padding: 10,
    borderRadius: 5,
     marginTop: 20,
     alignItems: "center",
     borderBottomWidth: 0.3,
     borderBottomColor: "grey"
    //marginT
     
  },
  textInput: {
   // borderWidth : 1,
    width: "90%",
    padding: 10
  },
  signInButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    //flexDirection: "row"
    marginTop: 50
    
},
   signInText: {
       fontSize: 18,
       fontWeight: "bold",
       color: "#3d5c5c",
       letterSpacing: 1
   },
 
})