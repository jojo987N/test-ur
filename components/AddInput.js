import { useState } from 'react'
import { TextInput, TouchableOpacity, View, StyleSheet, Text} from 'react-native'

const AddInput = ({title}) => {
    const [nb, setNb] = useState(1)
    let inputs = Array.apply(null, Array(nb))
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text>{title}</Text>
            <TouchableOpacity onPress={() => {setNb(nb=>nb+1)}}><Text>Add</Text></TouchableOpacity>
            </View>
            {inputs.map(input => (
                <View style={styles.inputContainer}>
                <View style={styles.input}>
                    <TextInput placeholder='Add Size' style={styles.textInput} />
                </View>
                <View style={styles.input}>
                    <TextInput  style={styles.textInput} />
                </View>
                </View>
            )
            )}


        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between"
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