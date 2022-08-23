import { APP_CONSTANT } from '../global'

const NewOrders = ({ navigation }) => {

    const [orders, setOrders] = useState({})

    useEffect(() => {

        const q = query(ordersCol, where(APP_CONSTANT.STATUS, '==', APP_CONSTANT.NEW_ORDER))

        onSnapshot(q, (snapshot) => {

            setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

        })



    }, [])

    return <DisplayOrders orders={orders} status={APP_CONSTANT.NEW_ORDER} navigation={navigation} />

}
export default NewOrders
