import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { APP_CONSTANT, button } from "../global";

const ButtonFoodDone = ({order}) => {
return (
<TouchableOpacity style={styles.button}
 onPress={()=> navigation.navigate("OrderReadyDetails", {order})}
>
  <Text style={styles.buttonText}>{button.READY}</Text>
</TouchableOpacity>
)}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#A30000",
        marginHorizontal: 10,
        borderRadius: 5,
        marginTop: 20,
      },
      buttonText: {
        color: "white",
        padding: 15,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 15,
        letterSpacing: 2,
      }
      
})
export default ButtonFoodDone; 