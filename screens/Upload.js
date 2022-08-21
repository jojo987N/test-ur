import { View, Text, Pressable, Image, TouchableOpacity, StyleSheet} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BottomSheet from 'reanimated-bottom-sheet'
import { useRef, useState } from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker"
import { updateProduct } from "../firebase"
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { APP_CONSTANT } from "../global";

export default function Upload({ route }) {
  const { product_id } = route.params
  const [image, setImage] = useState(null)
  const uploadImage = async (uri) => {
    const response = await fetch(uri)
    const blob = await response.blob()
    const storage = getStorage();
    const storageRef = ref(storage, 'restaurant/bonmange');
    getDownloadURL(storageRef)
      .then(url => updateProduct(product_id, url))
  }
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to acces camera roll is required")
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync()
    if (pickerResult.cancelled === true) return;
    uploadImage(pickerResult.uri)
    setImage(pickerResult.uri)
  }
  const renderContent = () => (
    <View style={styles.renderContent}>
      <View style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>{APP_CONSTANT.UPLOAD_PHOTO}</Text>
      </View>
      <TouchableOpacity onPress={
        () => openImagePickerAsync()
      }>
        <View style={styles.takeButton}>
          <Text style={styles.takeButtonText}>{APP_CONSTANT.TAKE_A_PHOTO}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.chooseButton}>
        <Text style={styles.chooseButtonText}>{APP_CONSTANT.CHOOSE_FROM_LIBRARY}</Text>
      </View>
      <View style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>{APP_CONSTANT.CANCEL}</Text>
      </View>
    </View>
  )
  const bs = useRef()
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet ref={bs} snapPoints={[450, 300, 0]} renderContent={renderContent}/>
      <Text>{APP_CONSTANT.UPLOAD_IMAGE}</Text>
      <View>
        {image ? (<Image source={{ uri: image }}
          style={styles.image} />) : (<></>)}
      </View>
      <Pressable style={styles.addButton}
        onPress={
          () => bs.current.snapTo(0)
        }
      >
        <AntDesign name="pluscircle" size={24} color="black" />
      </Pressable>
    </GestureHandlerRootView>
  );
}

const styles= StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  renderContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  uploadButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  takeButton: {
    marginTop: 30,
    backgroundColor: "red",
    marginHorizontal: 20,
    borderRadius: 10
  },
   uploadButton: {
    marginTop: 30
  },
  takeButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    color: "white"
  },
  chooseButton: {
    marginTop: 10,
    backgroundColor: "red",
    marginHorizontal: 20,
    borderRadius: 10
  },
  chooseButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    color: "white"
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: "red",
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  cancelButtonText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
    color: "white",
  },
  image: {
    width: 400,
    height: 400,
    alignSelf: "flex-start",
    resizeMode: "contain"
  },
   addButton: { marginTop: 10 }

})
