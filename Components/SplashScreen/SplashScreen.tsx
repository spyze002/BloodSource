import React from 'react'
import {  View, Image, Text } from 'react-native'

const SplashScreen = () => {

  const Logo = require ('../Logos/BloodSource.png')
 
  return (
    <View>
    
      <Image source={Logo}
      style ={{
        width: '100%',
        height: '100%'
      }}
      />
    
    </View>
  )
}

export default SplashScreen

