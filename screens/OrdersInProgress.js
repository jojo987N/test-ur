import { APP_CONSTANT } from '../global'

const OrdersInProgress = ({ navigation }) => {

    const [orders, setOrders] = useState({})

    useEffect(() => {

        const q = query(ordersCol, where(APP_CONSTANT.STATUS, '==', APP_CONSTANT.ORDERS_IN_PROGRESS))

        onSnapshot(q, (snapshot) => {

            setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        })



    }, [])

    return <DisplayOrders orders={orders} status={APP_CONSTANT.ORDERS_IN_PROGRESS} navigation={navigation} />

}
export default OrdersInProgress
