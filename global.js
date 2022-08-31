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
        ADD:  "Add",
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
        DECLINE: "Decline",
        FOODS: "Foods",
        NAME: "Name",
        DESCRIPTION: "Description",
        PRICE: 'Price',
        CATEGORIES: "Categories",
        DASHBOARD: "Dashboard",
        ORDERS : "Orders",
        READY_FOR_PICKUP: "Ready for Pickup",
        SIGN_OUT: "Sign out",
        WELCOME: "Welcome !",
        EMAIL: "Email",
        PASSWORD: "Password",
        SIGN_IN: "Sign In",
        SIGN_UP: "Sign Up",
        UPDATE_IMAGE: "Update Image",
        PHONE: "Phone",
        IMAGE: "Image",
        UPDATE: "Update"
        
        
    },
    STYLE: {
        CURRENCY: "currency"
    }
   
    
 }
export const language = "en"
export const currency = "USD"

export const SCREEN = {

    ORDER_DETAILS: "OrderDetails",
    NEW_ORDER_DETAILS: "NewOrderDetails",
    ORDER_IN_PROGRESS_DETAILS: "OrderInProgressDetails",
    ORDER_READY_DETAILS: "OrderReadyDetails",
    ADD_FOOD: "AddFood",
    UPLOAD: "Upload",
    UPDATECATEGORY: "UpdateCategory",
    CATEGORIES: "Categories",
    FOODS: "Foods",
    ORDERS: "Orders",
    SIGN_IN: "SignIn",
    DRAWER_NAVIGATOR: "DrawerNavigator",
    DASHBOARD: "Dashboard",
    ORDERS_SCREEN: "OrdersScreen",
    NEW_ORDERS: "newOrders",
    ORDERS_IN_PROGRESS: "OrdersInProgress",
    READY_FOR_PICKUP: "ReadyForPickup",
    CATEGORIES_NAVIGATOR: "CategoriesNavigator",
    FOODS_NAVIGATOR: "FoodsScreen",
    SIGN_OUT: "SignOut"

}

export const COLORS = {
    white: "#ffffff",
    black: "#000000",
    grey: "#808080",
    COLUMN: "#f2f2f2",
    ADD_BUTTON: "blue",
    SIGNIN_ICON: "#3d5c5c",
    SIGN_BUTTON: ['#948E99', '#2E1437'],
    SIGNUP_BUTTON: ['#ada996', '#f2f2f2', '#dbdbdb', '#eaeaea'],
    ADDRESS: "grey",
    SETTINGS_ICON: "#3d5c5c",
    SETTINGS_BACKGROUND: "#e0ebeb",
    SETTINGS_TITLE: "#3d5c5c",
    UPDATE_BUTTON: "#0080ff"
}
export const IMAGE = {
    NEW_ORDER: "../assets/images/pending.jpg"
}

export const ICON = {
    ADD_BUTTON: "pluscircle",
    DASHBOARD: "dashboard",
    FOODS: "fast-food",
    CATEGORY:"category",
    READY_FOR_PICKUP: "list-alt",
    SIGN_OUT: "log-out",
    NEW_ORDERS: "list-alt",
    ORDERS: "list-alt",
    ORDERS_IN_PROGRESS: "list-alt",
    PASSWORD: "lock",
    EMAIL: "person"
    
};
export const FONT = {
    SIGN_IN_BUTTON_TEXT: "bold"
}
export const ANIMATION = {
    SIGN_IN: "fadeInUpBig"
}


LogBox.ignoreLogs(['Setting a timer'])
LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core'])

