import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { TextInput, TouchableOpacity, View, StyleSheet, Text } from 'react-native'

const Size = ({ title, inputs, setInputs }) => {
    // const [nb, setNb] = useState(1)
    // let inputs = Array.apply(null, Array(nb))
     const [value, setValue] = useState()

    return (
        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Small</Text>
                <View style={styles.input}>
                    <TextInput placeholder='Price' style={styles.textInput} keyboardType="numeric"
                        // defaultValue="0"
                    value={value}
                     onChangeText={(text) => {

                   
                      }}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.label}>Middle</Text>
                <View style={styles.input}>
                    <TextInput placeholder='Amount' style={styles.textInput} keyboardType="numeric"
                        // defaultValue="0"
                    value={value}
                     onChangeText={(text) => {

                   
                      }}
                    />
                </View>
            </View>
            <View style={styles.inputContainer}>
            <Text style={styles.label}>Big</Text>
                <View style={styles.input}>
                    <TextInput placeholder='Amount' style={styles.textInput} keyboardType="numeric"
                        // defaultValue="0"
                    value={value}
                     onChangeText={(text) => {

                   
                      }}
                    />
                </View>
            </View>


        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 10,

    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center"

    },
    label: {
      flex: 1,
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center",
      marginRight: 5
    },
    input: {
        backgroundColor: "white",
        // marginHorizontal: 5,
        borderBottomWidth: 0.7,
        borderBottomColor: "grey",
        marginVertical: 10,
        // flex: 5,
        width: 100
        //marginT
    },
    textInput: {
        // borderWidth : 1,
        //  width: "90%",
        padding: 5,
        paddingHorizontal: 10
    },
})
export default Size