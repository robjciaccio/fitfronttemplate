import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <ImageBackground
      style={styles.imgBack}
      source={require('../images/background.png')}
    >
      <View style={styles.screen}>
        <View style={styles.emailBox}>
          <TextInput
            style={styles.nameInput}
            placeholder='Email'
            returnKeyType='done'
            keyboardAppearance='dark'
            onChangeText={(text) => setEmail(text)}
            defaultValue={email}
          />
        </View>
        <View style={styles.emailBox}>
          <TextInput
            style={styles.nameInput}
            secureTextEntry={true}
            placeholder='Password'
            returnKeyType='done'
            keyboardAppearance='dark'
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text
              style={{
                color: 'white',
                paddingTop: 6,
                fontSize: 18,
                fontWeight: '200',
              }}
            >
              Log In
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBack: {
    height: '100%',
    width: '100%',
  },
  nameInput: {
    height: 40,
    backgroundColor: 'white',
    width: 270,
    borderRadius: 8,
    paddingLeft: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  btn: {
    backgroundColor: 'darkgreen',
    width: 120,
    height: 35,
    borderRadius: 8,
    margin: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
  },
  emailBox: {
    margin: 10,
  },
})

export default LoginScreen
