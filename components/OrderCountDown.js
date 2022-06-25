import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { auth, updateOrder } from '../firebase';
import { APP_CONSTANT } from '../global';

export default function OrderCountDown({remainingTime, style}) {

   
  //const [duration, setDuration] = useState(totalMinutes)
 // const [timeLeft, setTimeLeft] = useState()


  //console.log(totalMinutes, timeLeft)
  // const [timeLeft, setTimeLeft] = useState(duration)
  //const [colorBackground, setColorBackground]= useState("rgb(30,30,30,0.5)")

  const navigation = useNavigation()
   

    

  // useEffect(() => {
  //   var refreshId = setInterval(() => {

  //     console.log(timeLeft)
  //     setTimeLeft(timeLeft - 1)

  //     if(timeLeft == 0)
  //     clearInterval(refreshId)
  //   }, 3000)
  // }, [])
  return (




    <CountdownCircleTimer

     // isPlaying
      duration={30}
      colors={['#348ac7', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[23, 17, 8, 0]}

      initialRemainingTime={remainingTime}

      onUpdate={(remainingTime) => {

    
          

      }}
      onComplete={() => {


        // setBottomSheetHeight("95%")
        // setMapdirection(false)
      }}
      size={55}
      strokeWidth={3}

    // updateInterval={3}

    //  children ={({remainingTime})=>{
        
    //  return (
    //     <View style={styles.container}>
    //         <Text style={styles.text}>{remainingTime}</Text>
    //         <Text style={styles.text1}>min </Text>
    //     </View>
     
    //  )}}
    //strokeWidth={10}
    //trailColor="#737373"
    >
      {() => <View style={style?{...styles.container, backgroundColor: style.backgroundColor, height: style.height, aspectRatio: 1, borderRadius: 50}:styles.container}>
        <Text style={style?{...styles.text, color: style.color}:styles.text}>{remainingTime}</Text>
        <Text style={style?{...styles.text1, color: style.color}:styles.text1}>min </Text>
      </View>}
    </CountdownCircleTimer>
  )
}

const styles = StyleSheet.create({
  container: {
     
    // height: 90,
    // width: 90,
    // borderRadius: 50,
     alignItems: "center",
     justifyContent: "center"
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white"
  },
  text1: {
      color: "white",
      
  }
})