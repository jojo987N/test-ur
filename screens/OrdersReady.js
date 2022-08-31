import { APP_CONSTANT, SCREEN } from '../global'

const OrdersReady = ({ navigation }) => {

    const [orders, setOrders] = useState({})

    useEffect(() => {

        const q = query(ordersCol, where(APP_CONSTANT.STATUS, '==', APP_CONSTANT.STATUS.ORDERS_READY))

        onSnapshot(q, (snapshot) => {

            setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        })



    }, [])

    return (
        <View>
        <View>
            <Text style={styles.title}>
                {APP_CONSTANT.TEXT.ORDERS_READY}({orders.length})
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
                            onPress={() => navigation.navigate(SCREEN.ORDER_READY_DETAILS, { order: item })}
                        >
                   
    
                    <Text style={styles.col}>{item.orderId.toUpperCase()}</Text>
            
                    <Text style={styles.col}>{item.User.name}</Text>

                    <Text style={styles.col}>{APP_CONSTANT.TEXT.ORDERS_READY}</Text>
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
})
export default OrdersReady
