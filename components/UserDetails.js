import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../global'
export default function UserDetails({ order }) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Image style={styles.image} source={{ uri: order.User.image }} />
          <View style={styles.name_address}>
            <Text style={styles.name}>{order.User.name}</Text>
            <Text style={styles.address}>{order.User.address}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="call" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingVertical: 30,
  },
  image: {
    height: 40,
    aspectRatio: 1
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
    color: COLORS.ADDRESS
  }
})