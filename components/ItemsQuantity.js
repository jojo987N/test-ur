import { View, Text,  } from 'react-native'

const ItemsQuantity = ({order}) => {
    return (
        <View>
            <Text style={styles.quantityText}>
                {Object.entries(order.User.items.map(item => item.name).reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {}))
                    .reduce((a, v) => a + v[1], 0)}
            </Text>
            <Text style={styles.itemsText}>items</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    quantityText: {
        color: "white", 
        textAlign: "center", 
        fontWeight: "bold", 
        fontSize: 18
    },
    itemsText: { 
        color: "white", 
        textAlign: "center" }
})
export default ItemsQuantity;