import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { APP_CONSTANT, button } from "../global";

const ButtonReady = ({order}) => {
return (
<TouchableOpacity style={styles.button}
 onPress={()=> navigation.navigate("OrderReadyDetails", {order})}
>
  <Text style={styles.buttonText}>{button.READY}</Text>
</TouchableOpacity>
)}

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