import { APP_CONSTANT } from "../global"

const DisplayOrders = ({ orders, status, navigation }) => {
    const render = {
        [APP_CONSTANT.STATUS.NEW_ORDER]: APP_CONSTANT.TEXT.NEW_ORDER,
        [APP_CONSTANT.STATUS.ORDERS_IN_PROGRESS]: APP_CONSTANT.TEXT.ORDERS_IN_PROGRESS,
        [APP_CONSTANT.STATUS.READY]: APP_CONSTANT.TEXT.ORDERS_READY
    }
    return (
        <View>
            <View>
                <Text style={styles.title}>
                    {`${render[status]} (${orders.filter(order => order.status === status).length})`}
                </Text>
            </View>
            <FlatList
                data={orders.filter(order => order.status === status)}
                keyExtractor={(index) => index}
                renderItem={({ item}) => {
                    return (
                        <RenderingOrder order={item} navigation={navigation} />
                    )
                }}
            />
        </View>
    )
}
export default DisplayOrders;