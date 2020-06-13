import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen')

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
    height: height / 4.5,
    width: width / 2.06,
  },
})

export default Logo
