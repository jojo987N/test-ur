import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { auth, updateOrder, updateRemainingTime } from '../firebase';
import { APP_CONSTANT } from '../global';

export default function OrderCountDown({order, remainingTime, style}) {
  const navigation = useNavigation()
  return (
    <CountdownCircleTimer
    // isPlaying
        // duration={30}
      // duration={Number(remainingTime)*60}
      duration={Number(remainingTime)}
      colors={['#348ac7', '#F7B801', '#A30000', '#A30000']}
       colorsTime={[23, 17, 8, 0]}
      // initialRemainingTime={remainingTime}
      onUpdate={(remainingTime) => {
        // setRemainingTime(Math.round(remainingTime/60))
         console.log(remainingTime)
         updateRemainingTime(order.id, remainingTime)
        //  console.log(remainingTime)
      }}
      onComplete={() => {
      }}
      size={55}
      strokeWidth={3}
    >
      {({remainingTime}) => <View style={style?{...styles.container, backgroundColor: style.backgroundColor, height: style.height, aspectRatio: 1, borderRadius: 50}:styles.container}>
        <Text style={style?{...styles.text, color: style.color}:styles.text}>{Math.round(remainingTime)}</Text>
        <Text style={style?{...styles.text1, color: style.color}:styles.text1}>min </Text>
      </View>}
    </CountdownCircleTimer>
  )
}
const styles = StyleSheet.create({
  container: {
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