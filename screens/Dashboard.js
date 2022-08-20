
import { View, Text, Switch, StyleSheet} from 'react-native'
import React, {useState, useMemo} from 'react'
import DashboardComponent from '../components/DashboardComponent'
import MenuNavigation from '../components/MenuNavigation'

export default function Dashboard({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false)

  const dashboardComponent = useMemo(()=> <DashboardComponent />, [])
   
   
  return (
    <View style={styles.container}>

      <View style={styles.header}>
          <MenuNavigation navigation={navigation}/>
          <Text style={styles.titleHeader}>Dashboard</Text>
        </View>
      <View style={styles.title_switch}>
        <Text style={styles.title}>Restaurant {isEnabled?"Open":"Close"} Now</Text>
        <View style={styles.switchContainer}>
          <Switch
            trackColor={{false: "#767577", true: "#81b0ff"}}
            thumbColor={isEnabled? "#81b0ff":"#f4f3f4"}
            onValueChange = {()=>{
              setIsEnabled(previousState => !previousState)
               
            }}
            value={isEnabled}/>
        </View>
      </View>
      {dashboardComponent}
      {/* <View style={styles.row1}>
        <View style={styles.orders}>
          <Text>1</Text>
        </View>
        <View style={styles.orders}>
        <Text>0</Text>
        </View>
        <View>
          
        </View>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    marginLeft: 10,
  },
  titleHeader: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold"
  },
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