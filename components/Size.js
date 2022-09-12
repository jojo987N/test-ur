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

            <View style={styles.inputContainer} key={index}>
                <View style={styles.input}>
                    <TextInput placeholder='Add Size' style={styles.textInput}

                        onChangeText={(text) => {
                
                        }} />
                </View>
                <View style={styles.input}>
                    <TextInput style={styles.textInput} keyboardType="numeric"
                        defaultValue="0"
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

    },
    input: {
        backgroundColor: "white",
        marginHorizontal: 5,
        borderBottomWidth: 0.7,
        borderBottomColor: "grey",
        marginVertical: 10,
        flex: 1,
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