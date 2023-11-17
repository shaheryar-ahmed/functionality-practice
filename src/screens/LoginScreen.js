import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {};
  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };
  const isLoginDisabled = !email || !password;

  return (
    <SafeAreaView
      style={{backgroundColor: '#F2F5F8', paddingTop: 23, height: '100%'}}>
      <TextInput
        placeholder="Email / Student Code"
        placeholderTextColor="#BAC2CB"
        style={{
          margin: 15,
          height: 40,
          borderBottomColor: '#BAC2CB',
          borderBottomWidth: 1,
          fontWeight: 'bold',
          fontSize: 16,
        }}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#BAC2CB"
        style={{
          marginTop: 30,
          margin: 15,
          height: 40,
          borderBottomColor: '#BAC2CB',
          borderBottomWidth: 1,
          fontWeight: 'bold',
          fontSize: 16,
        }}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: '#BAC2CB',
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: rememberMe ? '#5468FF' : 'transparent',
            }}
            onPress={() => toggleRememberMe()}>
            {rememberMe && (
              <Text style={{color: '#fff', alignItems: 'center'}}>✔</Text>
            )}
          </TouchableOpacity>
          <Text style={{color: '#BAC2CB', fontSize: 16, fontWeight: '500'}}>
            Remember Me
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{color: '#5468FF', fontSize: 16, fontWeight: '600'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: isLoginDisabled ? 'rgba(216, 220, 226, 1)' : '#5468FF',
          paddingVertical: 15,
          alignItems: 'center',
          borderRadius: 5,
          marginTop: 30,
          margin: 15,
        }}
        onPress={isLoginDisabled ? null : handleLogin}
        disabled={isLoginDisabled}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: 900}}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <View style={{alignItems: 'center',}}>
        <Text style={{color: '#BAC2CB', fontSize: 16, fontWeight: '900'}}>or</Text>
      </View>

      <View>
      <TouchableOpacity
        style={{
          backgroundColor: '#5468FF',
          paddingVertical: 15,
          alignItems: 'center',
          borderRadius: 5,
          margin: 15,
        }}>
        <Text style={{color: '#fff', fontSize: 16, fontWeight: 900}}>
          LOGIN
        </Text>
      </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#BAC2CB', fontSize: 16, fontWeight: '900'}}>Didn't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen") }>
        <Text style={{color: '#5468FF', fontSize: 16, fontWeight: '900'}}>Register Now</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
