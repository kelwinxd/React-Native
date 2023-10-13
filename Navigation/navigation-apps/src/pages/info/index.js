import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Info({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
      <Text style={styles.text}>Nome: João</Text>
      <Text style={styles.text}>Idade: 24</Text>
      <Text  style={[styles.text,styles.press]} onPress={() => {navigation.navigate('contact',
      {
        name: 'João',
        age:24,
      }
      
      )}}>About Contact</Text>
      </View>
     <View style={styles.box}>
     <Text style={styles.text}>Nome: Maria</Text>
      <Text style={styles.text}>Idade: 32</Text>
      <Text  style={[styles.text,styles.press]} onPress={() => {navigation.navigate('contact',
      {
        name: 'Maria',
        age:32,
      }
      
      )}}>About Contact</Text>
     </View>
     
      
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#212121",
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color:"#fff",
    paddingTop:2,
  },
  box: {
    borderWidth:2,
    borderColor:"#fff",
    paddingHorizontal:10,
    marginTop:8,
    paddingTop:10,
    paddingBottom:4,
    alignItems:"center",
    
    width:250,
    
    
    
  },
  press: {
    fontWeight:"bold",
    fontSize:15,
    marginLeft:110,
    marginTop:15,
    
    
    
    
  }
  
})

