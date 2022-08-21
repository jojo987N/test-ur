import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'
import { APP_CONSTANT } from '../global'

export default function UpdateCategory() {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={APP_CONSTANT.RESTAURANT_NAME}
          style={styles.textInput} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title={APP_CONSTANT.UPDATE} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: "grey",
    borderWidth: 0.5,
    marginTop: 0,
  },
  textInput: {
    width: "90%",
    padding: 10,
    marginLeft: 5,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  }
})