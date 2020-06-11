import React from 'react'
import { View, Image } from 'react-native'

const Logo = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image
        source={require('../../assets/img/NBA-logo.png')}
        resizeMode="contain"
        style={{ height: 150, width: 150 }}
      />
    </View>
  )
}

export default Logo
