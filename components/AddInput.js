import { TextInput, TouchableOpacity, View, StyleSheet, Text} from 'react-native'

const AddInput = () => {
    let inputs = Array.apply(null, Array(2))
    return (
        <View>
            <TouchableOpacity onPress={() => { }}><Text>Add</Text></TouchableOpacity>
            {inputs.map(input => (
                <View>
                <View style={styles.input}>
                    <TextInput placeholder='Add Size'/>
                </View>
                <View style={styles.input}>
                    <TextInput />
                </View>
                </View>
            )
            )}


        </View>

    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        marginHorizontal: 25,
        borderBottomWidth: 0.7,
        borderBottomColor: "grey",
        marginVertical: 10
       //marginT
    }
})
export default AddInput