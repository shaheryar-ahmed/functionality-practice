import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Details = () => {

const navigation = useNavigation()

  return (
      <View style={{marginTop: 10}}>
         <TouchableOpacity onPress={() => navigation.navigate('Dashboard') }>
           <Text
            style={{
              fontSize: 20,
              color: '#000',
              padding: 20,
              backgroundColor: '#b3ecec',
            }}>
            Page 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 10}} onPress={() => navigation.navigate('Home') }>
           <Text
            style={{
              fontSize: 20,
              color: '#000',
              padding: 20,
              backgroundColor: '#b3ecec',
            }}>
            Page 2
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default Details

const styles = StyleSheet.create({})