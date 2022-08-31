import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity, StyleSheet } from "react-native"
import { COLORS, ICON, SCREEN } from "../global"

const AddButton = () => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => navigation.navigate(SCREEN.ADD_FOOD)}>
            <AntDesign name={ICON.ADD_BUTTON} size={44} color={COLORS.ADD_BUTTON} />
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: 30
    }
})
export default AddButton