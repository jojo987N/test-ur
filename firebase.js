import {initializeApp} from 'firebase/app'
import {addDoc, getFirestore, collection, getDocs, doc, deleteDoc, orderBy, query, limit,
where, onSnapshot, serverTimestamp, updateDoc} from 'firebase/firestore'
import { LogBox } from 'react-native';
import { getAuth } from 'firebase/auth';

LogBox.ignoreLogs(['Setting a timer'])
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])


 const firebaseConfig = {

    // apiKey: "AIzaSyBKG5-vG_pBdRdKHX30UYUF9_F7SOt8Co4",
  
    // authDomain: "uber-eats-a4c19.firebaseapp.com",
  
    // projectId: "uber-eats-a4c19",
  
    // storageBucket: "uber-eats-a4c19.appspot.com",
  
    // messagingSenderId: "976827322571",
  
    // appId: "1:976827322571:web:8ba517048bb9928f938b4e"

    apiKey: "AIzaSyDrKqjM-fKGWBqj0-wpOOrIbeVlViEW-3c",
    authDomain: "good-food-c84d4.firebaseapp.com",
    projectId: "good-food-c84d4",
    storageBucket: "good-food-c84d4.appspot.com",
    messagingSenderId: "716731554402",
    appId: "1:716731554402:web:bc8a1748f6cdd6885e8f3b",
    measurementId: "G-VLK10R4D2P"
  
  };


  export const firebaseApp = initializeApp(firebaseConfig);

  export const auth = getAuth(firebaseApp)

  

  export const db = getFirestore()

  export const restaurantsCol = collection(db, 'restaurants')

  export const ordersCol = collection(db, 'orders')

  export const categoriesRestaurantsCol = collection(db, 'categoriesRestaurants')


  export const getOrders = (setOrders)=>{
    
    const orders = []
    const unsuscribe = onSnapshot(ordersCol, (snapshot)=>{

      snapshot.docs.forEach((doc)=>{
         
        if(doc.data().createdAt && doc.data().status === 'pending'){

      //console.log(doc.data().orderId)
      // console.log("eette")
       orders.push(doc.data())
        }


      })
       // console.log(orders)
       setOrders(orders)
    })

  }

 // getOrders()

  //console.log('bonjour')

export const productsCol = collection(db, 'products')

 export const getFoods = ()=>{

  const foods=[]
  
  const q= query(productsCol, orderBy('createdAt', 'desc'))

  return getDocs(q).then(snapshot=>{

     snapshot.docs.forEach((doc) => {

       // console.log(doc.data().createdAt)
        foods.push({...doc.data(), id: doc.id})

      })

      return foods

  })

 }

 export const categoriesCol = collection(db, 'categories')

 export const getCategories = (restaurantId)=>{

  const categories=[]
  
  //const q= query(categoriesCol, orderBy('createdAt', 'desc'))
  //  const q= query(categoriesCol, where('restaurantId', '==', restaurantId))

  return getDocs(categoriesCol).then(snapshot=>{

     snapshot.docs.forEach((doc) => {

       categories.push({...doc.data(), id: doc.id})

      })

      return categories

  })

 }

 export const getCategoriesRestaurants = ()=>{

  const categoriesRestaurants=[]
  
  //const q= query(categoriesCol, orderBy('createdAt', 'desc'))
  //  const q= query(categoriesRestaurantsCol, where('restaurantId', '==', restaurantId))

  return getDocs(categoriesRestaurantsCol).then(snapshot=>{

     snapshot.docs.forEach((doc) => {

      categoriesRestaurants.push({...doc.data(), id: doc.id})

      })

      return categoriesRestaurants

  })

 }

 //getFoods()

  

 const addProducts = () => {

  getDocs(restaurantsCol)
    .then(snapshot => snapshot.docs.forEach((doc) => {

      doc.data().dishes.forEach((dishe) => {
         
        if('name' in dishe)
        addDoc(productsCol, {
          restaurantID: doc.id,
          ...dishe ,
          createdAt: serverTimestamp()      
        }).then(()=>console.log("ADDED"))

      })

    }))

}

//addProducts()

export const addProduct = (name, description, price) => {

  return addDoc(productsCol, {
    restaurantID: auth.currentUser?.uid,
    name,
    description,
    price,
    createdAt: serverTimestamp()      
  }) 
}

export const addCategory = (name, description, image, restaurantId) => {

  return addDoc(categoriesCol, {
    restaurantId,
    name,
    description,
    image,
    createdAt: serverTimestamp()      
  }) 
}
 
export const addCategoryRestaurant = (categoryId, restaurantId) => {

  return addDoc(categoriesRestaurantsCol, {
    categoryId,
    restaurantId,
    createdAt: serverTimestamp()      
  }) 
   
}

export const deleteCategoriesRestaurants = async (categoryId, restaurantId) => {

  const q= query(categoriesRestaurantsCol, where('categoryId', '==', categoryId), where('restaurantId', '==', restaurantId))
   const snapshot = await getDocs(q);
  //  const docc = snapshot.docs.find((doc, i) => i === index)
   const docRef = doc(db, 'categoriesRestaurants', snapshot.docs[0].id)

  return deleteDoc(docRef)
     

  // return getDocs(categoriesRestaurantsCol).then(snapshot => {
  //   const docc = snapshot.docs.find((doc, i) => i === index)
  //     const docRef = doc(db, 'categoriesRestaurants', docc.id)
  //   deleteDoc(docRef)
  //     .then(() => {
  //       console.log("deleted")
  //     })

  // })


}

 

export const getRestaurantId = (uid)=>{

  // const q= query(restaurantsCol, where('managerId', '==', uid))
  const q= query(restaurantsCol, where('ownerId', '==', uid))

  return getDocs(q)
   
}


export const updateOrder = (order_Id, status, deliveryTime)=>{
  //0AiZlUQoHPIgS91AppRp

  //READY_FOR_PICKUP
  //const docRef = doc(db, 'orders', "0AiZlUQoHPIgS91AppRp")
   
  const docRef = doc(db, 'orders', order_Id)

  updateDoc(docRef, {
     
    status: status,
    deliveryTime: deliveryTime
  })
  .then(()=> console.log('good'))

}

export const updateProduct = (product_id, image)=>{

  const docRef = doc(db, 'products', product_id)

  updateDoc(docRef, {
     
    image: image,
    
  })
  .then(()=> console.log('good'))
}

export const updateRestaurant = (restaurant_id, image)=>{

  // console.log(image)
  const docRef = doc(db, 'restaurants', restaurant_id)

  updateDoc(docRef, {
     
    image: image,
    
  })
  .then(()=> console.log('good'))
}

export const updateRestaurantInfos = (restaurantData, email, name, phone, address, city, setRestaurantData)=>{

  // console.log(image)
  const docRef = doc(db, 'restaurants', restaurantData.id)

  const data =  {
    email,
    name,
    phone,
    address: address.description,
    lat: address.location.lat,
    lng: address.location.lng,
    city,
    updatedAt: serverTimestamp() 
   }

  return updateDoc(docRef, data)
  .then(()=> setRestaurantData({
    ...restaurantData,
    ...data
  }))
}



const getOrder = ()=>{
  getDocs(ordersCol)
  .then(snapshot => {
    console.log(snapshot.docs[0].data())
  })
}

export const addRestaurant = (userCredentials,name,phone, address) => {
 
  return addDoc(restaurantsCol,{
    ownerId: userCredentials.user.uid,
    name: name,
    ownerEmail: userCredentials.user.email,
    name,
    phone,
    address,
    createdAt: serverTimestamp() 
  })
}

console.log(db.collection('categories'))


 
