import { View, Text, SafeAreaView, StatusBar, Image, TextInput, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React, { useState,useContext } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { RestaurantContext } from '../context/RestaurantContext'
import { APP_CONSTANT, COLORS, ICON } from '../global'
import { updateRestaurant } from '../firebase'
export default function SettingsComponent({ navigation, bs }) {
    const { restaurantData } = useContext(RestaurantContext)
    console.log(restaurantData)
    const [email, setEmail] = useState(restaurantData.email)
    const [name, setName] = useState(restaurantData.name)
    const [phone, setPhone] = useState(restaurantData.phone)
    const [address, setAddress] = useState(restaurantData.location.display_address[0])
    const [image, setImage] = useState(restaurantData.image_url)
    const UpdateUser = async () => {
        updateRestaurant()
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => { bs.current.snapTo(0) }}>
                    <Image source={{ uri: restaurantData.image_url }} style={styles.image} />
                </Pressable>
                <Text style={styles.title}>{APP_CONSTANT.TEXT.UPDATE_IMAGE}</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.textInputContainer}>
                    <MaterialIcons name={ICON.EMAIL} size={20} color={COLORS.SETTINGS_ICON} style={styles.icon} />
                    <TextInput
                        placeholder={APP_CONSTANT.TEXT.EMAIL}
                        value={restaurantData.email}
                        onChangeText={(text) => setEmail(text)}
                        style={styles.textInput} />
                </View>
                <View style={styles.textInputContainer}>
                    <MaterialIcons name={ICON.EMAIL} size={20} color={COLORS.SETTINGS_ICON} style={styles.icon} />
                    <TextInput
                        placeholder={APP_CONSTANT.TEXT.NAME}
                        value={restaurantData.name}
                        onChangeText={(text) => setName(text)}
                        style={styles.textInput} />
                </View>
                <View style={styles.textInputContainer}>
                    <MaterialIcons name={ICON.EMAIL} size={20} color={COLORS.SETTINGS_ICON} style={styles.icon} />
                    <TextInput
                        placeholder={APP_CONSTANT.TEXT.PHONE}
                        value={restaurantData.phone}
                        onChangeText={(text) => setPhone(text)}
                        style={styles.textInput} />
                </View>
                <View style={styles.textInputContainer}>
                    <MaterialIcons name={ICON.EMAIL} size={20} color={COLORS.SETTINGS_ICON} style={styles.icon} />
                    <TextInput
                        placeholder={APP_CONSTANT.TEXT.ADDRESS}
                        value={restaurantData.location.display_address[0]}
                        onChangeText={(text) => setAddress(text)}
                        style={styles.textInput} />
                </View>
                <View style={styles.textInputContainer}>
                    <MaterialIcons name={ICON.EMAIL} size={20} color={COLORS.SETTINGS_ICON} style={styles.icon} />
                    <TextInput
                        placeholder={APP_CONSTANT.TEXT.IMAGE}
                        value={image}
                        onChangeText={(text) => setImage(text)}
                        style={styles.textInput} />
                </View>
                <TouchableOpacity onPress={() => UpdateUser()}>
                    <View style={styles.updateButton}>
                        <Text style={StyleSheet.updateTextButton}>{APP_CONSTANT.TEXT.UPDATE}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.SETTINGS_BACKGROUND,
        flex: 1
    },
    header: {
        alignItems: "center",
        marginTop: 20
    },
    image: {
        width: 100,
        height: 100
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        color: COLORS.SETTINGS_TITLE,
        letterSpacing: 5
    },
    content: {
        marginTop: 40
    },
    textInputContainer: {
        flexDirection: "row",
        backgroundColor: COLORS.white,
        marginHorizontal: 25,
        borderRadius: 5,
        marginTop: 20,
        alignItems: "center"
    },
    textInput: {
        width: "90%",
        padding: 10
    },
    icon: {
        marginLeft: 6,
    },
    updateButton: {
        backgroundColor: COLORS.UPDATE_BUTTON,
        marginHorizontal: 25,
        borderRadius: 5,
        marginTop: 30
    },
    updateTextButton: {
        padding: 16,
        textAlign: "center",
        color: COLORS.white,
        fontWeight: "bold",
        fontSize: 15,
        letterSpacing: 2
    }
})