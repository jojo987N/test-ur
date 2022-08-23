import { LogBox } from 'react-native';
export const APP_CONSTANT = {
    STATUS: {
        CONFIRMED: "confirmed",
        PENDING: "pending",
        NEW_ORDER: "new",
        ORDERS_IN_PROGRESS: "ordersInProgress",
        ORDERS_READY: "ready",
        ONLINE: "Online",
    },
    TEXT: {
        ORDER_ID: "Order ID",
        ADDRESS: "Address",
        
        STATUS: "status",
        ANY: "all",
        PRICE: "price",
        UPLOAD_PHOTO: "Upload Photo",
        TAKE_A_PHOTO: "Take a Photo",
        CHOOSE_FROM_LIBRARY: "Choose From Library",
        CANCEL: "Cancel",
        UPLOAD_IMAGE: "Upload Image",
        RESTAURANT_NAME: "Restaurant Name",
        UPDATE: "Update",
        CONFIRMED: "Confirmed",
        PENDING: "Pending",
        NEW_ORDER: "New",
        ORDERS_IN_PROGRESS: "In Progress",
        ORDERS_READY: "Ready",
        ONLINE: "Online",
    },
   
    
 }
export const language = "en"
export const currency = "USD"

export const COLORS = {
    white: "#ffffff"
}
LogBox.ignoreLogs(['Setting a timer'])
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])

