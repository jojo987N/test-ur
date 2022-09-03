import { initializeApp } from 'firebase/app'
import {addDoc, getFirestore, collection, getDocs, doc, orderBy, query, where, onSnapshot, serverTimestamp, updateDoc} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: {/* Your firebase config here */},
  authDomain:  {/* Your firebase config here */},
  projectId:  {/* Your firebase config here */},
  storageBucket:  {/* Your firebase config here */},
  messagingSenderId:  {/* Your firebase config here */},
  appId:  {/* Your firebase config here */},
};
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp)
export const db = getFirestore()
export const restaurantsCol = collection(db, 'restaurants')
export const ordersCol = collection(db, 'orders')
export const getOrders = (setOrders) => {
  const orders = []
  onSnapshot(ordersCol, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      if (doc.data().createdAt && doc.data().status === 'pending') {
        orders.push(doc.data())
      }
    })
    setOrders(orders)
  })
}
export const productsCol = collection(db, 'products')
export const getFoods = () => {
  const foods = []
  const q = query(productsCol, orderBy('createdAt', 'desc'))
  return getDocs(q).then(snapshot => {
    snapshot.docs.forEach((doc) => {
      foods.push({ ...doc.data(), id: doc.id })
    })
    return foods
  })
}
export const categoriesCol = collection(db, 'categories')
export const getCategories = async () => {
  const categories = []
  return getDocs(categoriesCol).then(snapshot => {
    snapshot.docs.forEach((doc) => {
      categories.push({ ...doc.data(), id: doc.id })
    })
    return categories
  })
}
export const addProduct = (name, description, price) => {
  return addDoc(productsCol, {
    restaurantID: auth.currentUser?.uid,
    name,
    description,
    price,
    createdAt: serverTimestamp()
  })
}
export const getRestaurantId = (uid) => {
  const q = query(restaurantsCol, where('managerId', '==', uid))
  return getDocs(q)
}
export const updateOrder = (order_Id, status, deliveryTime) => {
  const docRef = doc(db, 'orders', order_Id)
  updateDoc(docRef, {
    status: status,
    deliveryTime: deliveryTime
  })
    .then(() => console.log('updated'))
}
export const updateProduct = (product_id, image) => {
  const docRef = doc(db, 'products', product_id)
  updateDoc(docRef, {
    image: image,
  })
    .then(() => console.log('updated'))
}

export const updateRestaurant = (setRestaurantData) => {
  const docRef = doc(db, 'restaurants', restaurant_Id)
  updateDoc(docRef, {
    status: status,
    deliveryTime: deliveryTime
  })
    .then(() => console.log('updated'))
}
