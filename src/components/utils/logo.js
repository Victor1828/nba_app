import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const Logo = props => {
  const { height, width } = props
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/NBA-logo.png')}
        resizeMode="contain"
        style={styles.logo(height, width)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: (height, width) => ({
    height,
    width,
  }),
})

export default Logo
