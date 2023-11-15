import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Dashboard = () => {
    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.goBack }>
    <Text
     style={{
       fontSize: 20,
       color: '#000',
       padding: 20,
       backgroundColor: '#b3ecec',
     }}>
     Screen 1
   </Text>
 </TouchableOpacity>
  )
}

export default Dashboard

const styles = StyleSheet.create({})