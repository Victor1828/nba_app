import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/NBA-logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 200,
  },
})

export default Logo
