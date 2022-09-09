import { View, Text, SafeAreaView, StatusBar, Pressable, Image, TouchableOpacity} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from "react-native-reanimated";
import {useEffect, useRef, useState} from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker"
import * as Permissions from 'expo-permissions'
import {Camera} from "expo-camera"
//import storage from '@react-native-firebase/storage'
//import {} from 'firebase/app'
import { updateProduct } from "../firebase"
//import {firebaseConfig} from './firebase'
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import SettingsComponent from "../components/SettingsComponent";
//import { MenuButton } from "./OrdersScreen";


//initializeApp(firebaseConfig);

export default function Upload({route, navigation}) {

    

    const uploadImage = async (uri)=>{
    const response = await fetch(uri)
    
    const blob = await response.blob()

    const storage = getStorage();

    const storageRef = ref(storage, 'restaurant/bonmange');
    await uploadBytes(storageRef, uri)
    getDownloadURL(storageRef) 
    // .then(url=> updateProduct(product_id,url))

    // uploadBytes(storageRef, blob).then((snapshot)=>{
    //   console.log('Uploaded')
    // })

  }

  //const reference = storage().ref('')

  const [image, setImage] = useState(null) 


  
  let openImagePickerAsync = async ()=>{

    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(permissionResult.granted === false){
    alert("Permission to acces camera roll is required")
    return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync()
  //  console.log(pickerResult)
   console.log(pickerResult.uri.substring(pickerResult.uri.lastIndexOf('/')))
   if(pickerResult.cancelled === true) return;

   //getBlobFromUri(pickerResult.uri)
  // blobFromUrl(pickerResult.uri)

  uploadImage(pickerResult.uri)

   setImage(pickerResult.uri)

  }

  
  const renderContent = ()=>(
    <View style={{
      
      backgroundColor: "white",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      elevation: 5,
       
    }}>
         
        <View style={{
        marginTop: 30
      }}> 
        <Text style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold"
        }}>Upload Photo</Text>
      </View>
       
       <TouchableOpacity  onPress={
        //()=>bs.current.snapTo(0)
        ()=>openImagePickerAsync()
       
      }> 
      <View style={{
        marginTop: 30,
        backgroundColor:"red",
        marginHorizontal: 20,
        borderRadius: 10
      }}> 
        <Text style={{
          textAlign: "center",
          fontSize: 15,
          fontWeight: "bold",
          padding: 10,
          color: "white"
        }}>Take a Photo</Text>
      </View>
      </TouchableOpacity>
      <View style={{
        marginTop: 10,
        backgroundColor:"red",
        marginHorizontal: 20,
        borderRadius: 10
      }}> 
        <Text style={{
          textAlign: "center",
          fontSize: 15,
          fontWeight: "bold",
          padding: 10,
          color: "white"
        }}>Choose From Library</Text>
      </View>
      <View style={{
        marginTop: 10,
        backgroundColor:"red",
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 20
      }}> 
        <Text style={{
          textAlign: "center",
          fontSize: 15,
          fontWeight: "bold",
          padding: 10,
          color: "white",
        }}>Cancel</Text>
      </View>
      
    </View>
    
  )
  
   const bs = useRef()

   useEffect(()=>{
      
    setTimeout(()=>{
        
        bs.current.snapTo(2)
    }, 2000)
   }, [])
  return (
    <GestureHandlerRootView style={{
     // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "#eee",
      flex: 1,
     // justifyContent: "flex-start",
      alignItems: "center",
    }}>
      <BottomSheet 
      ref={bs}
      snapPoints={["47%","90%", 0]}
      renderContent={renderContent}
      //borderRadius={10}
      
       
        
            />
        
      {/* <Text>Upload Image</Text> */}
      <View style={{
       // backgroundColor: "#cccccc",
        //width: 100,
        //marginTop: 10,
        //borderRadius: 10
        
      }}>
        {/* <Text style={{
          padding: 8,
          textAlign: "center",
          fontWeight: "bold"
        }}>Post</Text> */}

        {image?(<Image source={{uri: image}} 
        style={{
          width: 400,
          height:400,
          alignSelf: "flex-start",
          resizeMode: "contain"
        }}/>):(<></>)}

         
      </View>
      {/* <Pressable style={{marginTop: 10}}
      onPress={
        ()=>bs.current.snapTo(2)
      }
      >
           <AntDesign name="pluscircle" size={24} color="black" />
        </Pressable> */}
        
       <SettingsComponent bs={bs}/>

       {/* <MenuButton navigation={navigation} /> */}
         
    </GestureHandlerRootView>
      
  );
}


 



// import { View, Text, SafeAreaView, StatusBar, Pressable, Image, TouchableOpacity} from "react-native";
// import { AntDesign } from "@expo/vector-icons";
// import BottomSheet from 'reanimated-bottom-sheet'
// import Animated from "react-native-reanimated";
// import {useRef, useState} from 'react'
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as ImagePicker from "expo-image-picker"
// import * as Permissions from 'expo-permissions'
// import {Camera} from "expo-camera"
// //import storage from '@react-native-firebase/storage'
// //import {} from 'firebase/app'
// import {} from "../firebase"
// //import {firebaseConfig} from './firebase'
// import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'


// //initializeApp(firebaseConfig);

// export default function Home() {


//   const uploadImage = async (uri)=>{
//     const response = await fetch(uri)
    
//     const blob = await response.blob()

//     const storage = getStorage();

//     const storageRef = ref(storage, 'restaurant/bonmange');
//     getDownloadURL(storageRef) 
//     .then(url=> console.log(url))

//     // uploadBytes(storageRef, blob).then((snapshot)=>{
//     //   console.log('Uploaded')
//     // })

//   }

//   const blobFromUrl = async (uri)=>{
//    const response = await fetch(uri)
//    //.then(r => r.blob())
//    const blob = await response.blob()

//   // console.log(blob)
//  //const url = window.URL.createObjectURL(new Blob([blob]))
//  //console.log(url)
//   }

//   const getBlobFromUri = (uri)=>{

//     const xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = ()=>{
//       console.log(xhr.response)
//     }
//     xhr.responseType = "blob";
//     xhr.open("GET", uri, true)
//     xhr.send()
//   }

//   //const reference = storage().ref('')

//   const [image, setImage] = useState(null) 


//   const getPermissionAsync = async ()=>{
    
//     //const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
//     const {status} = await Camera.requestCameraPermissionsAsync();
//   }


//   let openImagePickerAsync = async ()=>{

//     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if(permissionResult.granted === false){
//     alert("Permission to acces camera roll is required")
//     return;
//     }
//     let pickerResult = await ImagePicker.launchImageLibraryAsync()
//    console.log(pickerResult)
//    if(pickerResult.cancelled === true) return;

//    //getBlobFromUri(pickerResult.uri)
//   // blobFromUrl(pickerResult.uri)

//   uploadImage(pickerResult.uri)

//    setImage(pickerResult.uri)

//   }

//   const pickImage = async () =>{

//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     console.log(result)
//   }

//   const renderContent = ()=>(
//     <View style={{
      
//       backgroundColor: "white",
//       borderTopLeftRadius: 20,
//       borderTopRightRadius: 20,
//       elevation: 5,
       
//     }}>
         
//         <View style={{
//         marginTop: 30
//       }}> 
//         <Text style={{
//           textAlign: "center",
//           fontSize: 20,
//           fontWeight: "bold"
//         }}>Upload Photo</Text>
//       </View>
       
//        <TouchableOpacity  onPress={
//         //()=>bs.current.snapTo(0)
//         ()=>openImagePickerAsync()
       
//       }> 
//       <View style={{
//         marginTop: 30,
//         backgroundColor:"red",
//         marginHorizontal: 20,
//         borderRadius: 10
//       }}> 
//         <Text style={{
//           textAlign: "center",
//           fontSize: 15,
//           fontWeight: "bold",
//           padding: 10,
//           color: "white"
//         }}>Take a Photo</Text>
//       </View>
//       </TouchableOpacity>
//       <View style={{
//         marginTop: 10,
//         backgroundColor:"red",
//         marginHorizontal: 20,
//         borderRadius: 10
//       }}> 
//         <Text style={{
//           textAlign: "center",
//           fontSize: 15,
//           fontWeight: "bold",
//           padding: 10,
//           color: "white"
//         }}>Choose From Library</Text>
//       </View>
//       <View style={{
//         marginTop: 10,
//         backgroundColor:"red",
//         marginHorizontal: 20,
//         borderRadius: 10,
//         marginBottom: 20
//       }}> 
//         <Text style={{
//           textAlign: "center",
//           fontSize: 15,
//           fontWeight: "bold",
//           padding: 10,
//           color: "white",
//         }}>Cancel</Text>
//       </View>
      
//     </View>
    
//   )
  
//    const bs = useRef()
//   return (
//     <GestureHandlerRootView style={{
//      // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//       backgroundColor: "#eee",
//       flex: 1,
//       justifyContent: "flex-start",
//       alignItems: "center",
//     }}>
//       <BottomSheet 
//       ref={bs}
//       snapPoints={[450, 300, 0]}
//       renderContent={renderContent}
//       //borderRadius={10}
      
       
        
//             />
       
//       <Text>Universal React with Expo</Text>
//       <View style={{
//        // backgroundColor: "#cccccc",
//         //width: 100,
//         //marginTop: 10,
//         //borderRadius: 10
        
//       }}>
//         {/* <Text style={{
//           padding: 8,
//           textAlign: "center",
//           fontWeight: "bold"
//         }}>Post</Text> */}

//         {image?(<Image source={{uri: image}} 
//         style={{
//           width: 400,
//           height:400,
//           resizeMode: "contain"
//         }}/>):(<></>)}


//       </View>
//       <Pressable style={{marginTop: 10}}
//       onPress={
//         ()=>bs.current.snapTo(0)
//         //openImagePickerAsync
       
//       }
//       >
//            <AntDesign name="pluscircle" size={24} color="black" />
//         </Pressable>

//     </GestureHandlerRootView>
      
//   );
// }
