import { View, Text, StyleSheet } from 'react-native'
import React, { useContext} from 'react'
import { Avatar } from 'react-native-elements'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { RestaurantContext } from '../context/RestaurantContext'

export default function DrawerContent(props) {
    const { restaurantData } = useContext(RestaurantContext)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 20,
                }}>
                    <Avatar
                        rounded
                        avatarStyle={styles.avatar}
                        size={75}
                        source={{ uri: restaurantData.image_url }} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 18,
                        }}>{restaurantData.name}</Text>
                        <Text style={{
                            fontSize: 14,
                        }}>{restaurantData.location.address1}</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatar: {
        borderWidth: 4,
        borderColor: "white",
    }
})