import { AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { TextInput, TouchableOpacity, View, StyleSheet, Text } from 'react-native'

const AddInput = ({ title, inputs, setInputs}) => {
    // const [nb, setNb] = useState(1)
    // let inputs = Array.apply(null, Array(nb))
    // const [value, setValue] = useState()
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity onPress={() => { 
                    
                    setInputs(inputs => new Array(inputs.length+1).fill({
                         
                        title: "",
                        value: 0,
                      }))
                    
                    // setNb(nb => nb + 1)
                    
                    
                     }}>
                    <AntDesign name="pluscircle" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {inputs.map((input, index) => {
              setTimeout(()=> {
                console.log(inputs)
              }, 3000)
               
               return  (
                <View style={styles.inputContainer} key={index}>
                    <View style={styles.input}>
                        <TextInput placeholder='Add Size' style={styles.textInput} 
                        
                        onChangeText={(text) => {
                            setInputs([...inputs.slice(0, index),
                                          {
                                          title: text,
                                          value: inputs[index].value
                                        } ,
                                        ...inputs.slice(index + 1)])
                         }}/>
                    </View>
                    <View style={styles.input}>
                        <TextInput style={styles.textInput} keyboardType="numeric" 
                        defaultValue="0"
                        // value={value}
                         onChangeText={(text) => {
                            setInputs([...inputs.slice(0, index),
                                          {
                                        title: inputs[index].text,
                                          value: text,
                                        } ,
                                        ...inputs.slice(index + 1)])
                         }}
                        />
                    </View>
                </View>
            )
            }
            )}


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
export default AddInput