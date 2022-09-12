import { TextInput, TouchableOpacity, View, StyleSheet, Text} from 'react-native'

const AddInput = () => {
    let inputs = []
    return (
        <View>
            <TouchableOpacity onPress={() => { }}><Text>Add</Text></TouchableOpacity>
            {inputs.map(input => (
                <View style={styles.input}>
                    <TextInput />
                </View>
            )
            )}


        </View>

    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: "red",
        marginHorizontal: 25,
        borderBottomWidth: 0.7,
        borderBottomColor: "grey"
       //marginT
    }
})
export default AddInput