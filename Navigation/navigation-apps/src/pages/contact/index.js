import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Contact({route}) {
let name = route.params.name
let desc = ""



  switch (name) {
    case "Maria":
      desc = "Maria tem peitos"
      break;
    case "João":
      desc = "João tem braços"
      break;
  
    default:
      break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.information}>
      <Text style={styles.text}>Nome:{route.params?.name}</Text>
      <Text style={styles.text}>Idade:{route.params?.age}</Text>
      <Text style={styles.text} >Descrição: {desc}</Text>
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"gray",
    flex: 1,
    alignItems: 'center',
    justifyContent:"center"
  },
  text: {
    
    color:"#fff",
    paddingTop:10,
    
  },
  information: {
    borderWidth:1,
    borderColor:"#fff",
    width:"80%",
    height:"70%",
    paddingHorizontal:20,
  }
})
