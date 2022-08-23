import { APP_CONSTANT } from '../global'

const OrdersReady = ({ navigation }) => {

    const [orders, setOrders] = useState({})

    useEffect(() => {

        const q = query(ordersCol, where(APP_CONSTANT.STATUS, '==', APP_CONSTANT.STATUS.ORDERS_READY))

        onSnapshot(q, (snapshot) => {

            setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        })



    }, [])

    return <DisplayOrders orders={orders} status={APP_CONSTANT.STATUS.ORDERS_READY} navigation={navigation} />

}
export default OrdersReady
