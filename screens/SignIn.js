import { View, Text, SafeAreaView, StatusBar, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { auth, getRestaurantId, userInfos } from '../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { LinearGradient } from 'expo-linear-gradient'
import * as Animatable from "react-native-animatable"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RestaurantContext } from '../context/RestaurantContext'
import Loading from '../components/Loading'
import { ANIMATION, APP_CONSTANT, COLORS, FONT, ICON } from '../global'
import { colors } from 'react-native-elements'

export default function SignIn({ navigation, route }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { restaurantData, setRestaurantData } = useContext(RestaurantContext)
  const [loading, setLoading] = useState(false)


  const SignInUser = () => {
    setLoading(true)
    try {
      signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      setLoading(false)
    }


  }

  useEffect(() => {

    const checkAuth = onAuthStateChanged(auth, (user) => {

      if (user) {
        getRestaurantId(user.uid)
          .then(snapshot => {

            if (snapshot.docs[0]) {

              setRestaurantData({ ...snapshot.docs[0].data(), email: user.email })

            }


          })

      }
    })
    return checkAuth

  }, [])

  if (loading)
    return <Loading />

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{APP_CONSTANT.TEXT.WELCOME}</Text>
      </View>

      <Animatable.View style={styles.footer} animation={ANIMATION.SIGN_IN}>

        <View style={styles.textInputContainer}>
          <MaterialIcons name={ICON.EMAIL} size={20} color={COLORS.SIGNIN_ICON} style={styles.icon} />
          <TextInput
            placeholder={APP_CONSTANT.TEXT.EMAIL}
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.textInput} />

        </View>

        <View style={styles.textInputContainer}>
          <MaterialIcons name={ICON.PASSWORD} size={20} color={styles.icon} style={styles.icon} />
          <TextInput
            placeholder={APP_CONSTANT.TEXT.PASSWORD}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.textInput}
            secureTextEntry />

        </View>

        <TouchableOpacity onPress={() => SignInUser()}>

          <LinearGradient
            colors={COLORS.SIGN_BUTTON}
            style={styles.signInButton} >
            <Text style={styles.signInButtonText}>{APP_CONSTANT.TEXT.SIGN_IN}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>

          <LinearGradient
            colors={COLORS.SIGNUP_BUTTON}
            style={styles.signInButton} >
            <Text style={styles.signInText}>{APP_CONSTANT.TEXT.SIGN_UP}</Text>
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
    
    flex: 1,
    paddingBottom: 50,
    justifyContent: "flex-end"
  },
  title: {
    fontSize: 25, fontWeight: "bold", color: COLORS.SIGNUP_BUTTON,
    letterSpacing: 5
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textInputContainer: {
    flexDirection: "row",
    
    backgroundColor: colors.white,
    marginHorizontal: 25,
    
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "grey"
    

  },
  textInput: {
    
    width: "90%",
    padding: 10
  },
  signInButton: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    
    marginTop: 50

  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: FONT.SIGN_IN_BUTTON_TEXT,
    color: COLORS.SIGNIN_ICON,
    letterSpacing: 1,
    color: COLORS.white
  },
  icon: {
    marginLeft: 6,
  }

})