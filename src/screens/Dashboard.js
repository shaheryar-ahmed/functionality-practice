import React from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details") }>
    <Text
     style={{
       fontSize: 20,
       color: '#000',
       padding: 20,
       backgroundColor: '#b3ecec',
     }}>
     Details
   </Text>
 </TouchableOpacity>
  )
}

export default Dashboard

const styles = StyleSheet.create({})