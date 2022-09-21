import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { updateStatus } from "../firebase";
import { APP_CONSTANT, button } from "../global";

const ButtonReady = ({ order }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.button}
            onPress={() =>{
                updateStatus(order.id, APP_CONSTANT.READY)
                .then(()=> navigation.navigate("ReadyForPickup"))
                 
            }}
        >
            <Text style={styles.buttonText}>{button.READY}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#6600ff",
        marginHorizontal: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        padding: 15,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 2,
    }

})
export default ButtonReady; 