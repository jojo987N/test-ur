import { View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native'
import ItemsQuantity from '../components/ItemsQuantity'
import OrderCountDown from '../components/OrderCountDown'
import { APP_CONSTANT, COLORS } from '../global'

const OrdersInProgress = ({ navigation }) => {

    const [orders, setOrders] = useState({})

    useEffect(() => {

        const q = query(ordersCol, where(APP_CONSTANT.STATUS, '==', APP_CONSTANT.ORDERS_IN_PROGRESS))

        onSnapshot(q, (snapshot) => {

            setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        })



    }, [])

    return (
        <View>
            <View>
                <Text style={styles.title}>
                    {APP_CONSTANT.TEXT.ORDERS_IN_PROGRESS}({orders.length})
                </Text>
            </View>
            <FlatList
                data={orders}
                keyExtractor={(index) => index}
                renderItem={({ item}) => {
                    return (

                        <TouchableOpacity style={{ ...styles.row, 
            
                            backgroundColor: COLORS.black
                             }}
                                onPress={() => navigation.navigate(SCREEN.ORDERDETAILS, { order: item })}
                            >
                       
                         
        
                        <Text style={styles.col}>{item.orderId.toUpperCase()}</Text>
                       
                        <View style={styles.quantity}>
                            <ItemsQuantity order={item} />
                        </View>
                        <View style={styles.status}>
                            <OrderCountDown remainingTime={item.remainingTime}/> 
                        </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )

}



const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        paddingTop: 10,
        color: "white"
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",

        borderWidth: 0.5,
        
        marginVertical: 10,
        borderRadius: 10,
       
        borderColor: COLORS.grey,
        overflow: "hidden",
        shadowColor: COLORS.grey,
        shadowOpacity: 1
    },
    col: {
        flex: 1,
        fontSize: 15,
        paddingHorizontal: 2,
        paddingVertical: 15,
        fontWeight: "bold",
       
        textAlign: "center",
       
       paddingVertical: 30,
       color: COLORS.COLUMN
        
    },
    quantity: {
        flex: 1
    },

    status:{
        flex: 1,
        alignItems: "center"
        
    },
})

export default OrdersInProgress
