import BottomSheet from 'reanimated-bottom-sheet'
import {useRef} from 'react'
import * as ImagePicker from "expo-image-picker"
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import { TouchableOpacity, View, Text} from 'react-native'




const PickImage = (bs, setImage, setUrl) => {

    const uploadImage = async (uri)=>{
      const response = await fetch(uri)
      
      const blob = await response.blob()
  
      const storage = getStorage();
  
      const storageRef = ref(storage, uri.substring(uri.lastIndexOf('/')+1));
      await uploadBytes(storageRef, blob)
      const url = await getDownloadURL(storageRef) 
      setUrl(url)
      // updateFunction(id, url)
      // .then(url=> updateProduct(product_id,url))
  
      // uploadBytes(storageRef, blob).then((snapshot)=>{
      //   console.log('Uploaded')
      // })
  
    }

    let openImagePickerAsync = async ()=>{

        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if(permissionResult.granted === false){
        alert("Permission to acces camera roll is required")
        return;
        }
        let pickerResult = await ImagePicker.launchImageLibraryAsync()
        console.log(pickerResult)
      //  console.log(pickerResult.uri.substring(pickerResult.uri.lastIndexOf('/')+1))
       if(pickerResult.cancelled === true) return;
    
       //getBlobFromUri(pickerResult.uri)
      // blobFromUrl(pickerResult.uri)
    
      uploadImage(pickerResult.uri)
    
      //  setImage(pickerResult.uri)
    
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

    return (
        <BottomSheet 
        ref={bs}
        snapPoints={["47%","90%", 0]}
        renderContent={renderContent}
        //borderRadius={10}
          
              />
          
    )
}
export default PickImage; 