import { View, Text, Switch, StyleSheet} from 'react-native'
import React, {useState} from 'react'

export default function Dashboard() {
  const [isEnabled, setIsEnabled] = useState(false)
   
  return (
    <View style={styles.container}>
      
      <View style={styles.title_switch}>
        <Text style={styles.title}>Restaurant Open Now</Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{false: "#767577", true: "#81b0ff"}}
            thumbColor={isEnabled? "#81b0ff":"#f4f3f4"}
            onValueChange = {()=>setIsEnabled(previousState => !previousState)}
            value={isEnabled}/>
        </View>
      </View>
      <View style={styles.row1}>
        <View style={styles.orders}>
          <Text>1</Text>
        </View>
        <View style={styles.orders}>
        <Text>0</Text>
        </View>
        <View>
          
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
   // alignItems: "center"
  },
  title_switch: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 20,
  marginHorizontal: 10
  },
  title: {
    //borderWidth: 1
    fontSize: 15,
  
  },
  switchContainer:{
   // borderWidth: 1
  },
  row1:{
    flexDirection: "row"
  },
  orders: {
   width : 150,
   height: 200,
   backgroundColor: "red",
   marginHorizontal:  20,
   
  },

})