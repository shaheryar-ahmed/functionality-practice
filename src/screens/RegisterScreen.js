import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{backgroundColor: '#F2F5F8', padding: 23, height: '100%'}}>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{color: '#000', fontSize: 16, fontWeight: '900'}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
