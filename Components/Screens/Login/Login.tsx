import { View, Text, Image,  SafeAreaView, TextInput, Button } from 'react-native'
import React from 'react'

export default function Login() {

    const logo = require ('../../Logos/BloodSource1.png')
  return (

    //main view for the overall login screen
    <SafeAreaView>
    {/**sub view for the login screen with 2 other sub view containers */}
    <View 
    style={{
        display: 'flex',
        backgroundColor: '#ffffff',
        height: '100%'
    }}
    >
        {/**beginning of the first container that hold the image logo */}
        <View 
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <Image source={logo} 
            style={{
                width: 250,
                height: 200
            }}
            />
        </View>
            {/**Sub view holding the text inputs accepted by  */}
       <View 
       style={{
           display: 'flex',
           backgroundColor: '#FF0A00',
           height: 520,
           borderTopLeftRadius: 30,
           borderTopRightRadius: 30,
           alignItems: 'center'
       }}
       >
          {/**sub container for holding the inputs and using it for design */}

         <View
         style={{
           display: 'flex',
           width: '90%',
           position: 'relative',
           justifyContent: 'space-evenly',
           alignItems: 'center',
           height: 200
         }}
         >
         <TextInput
          placeholder='Enter your number'
          placeholderTextColor={'black'}
          keyboardType ={'numeric'}
          style={{
            backgroundColor: 'pink',
            width: '90%',
            borderRadius: 10
          }}
          />
          
          <TextInput
          placeholder='Enter your password'
          placeholderTextColor={'black'}
          keyboardType ={'default'}
          secureTextEntry
          style={{
            backgroundColor: 'pink',
            width: '90%',
            borderRadius: 10
          }}
          />
         </View>
        
          {/**container holding the buttons, ie signup and login */}
          <View 
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            height: 150,
            width: 250,
            
           
          }}
          >
            <Button
            title='Signin'
            accessibilityLabel='sign in to your donor account'
            touchSoundDisabled = {true}
          
            />

            <Text 
            style={{
              color: '#fff',
              textAlign: 'center'
            }}
            >I don't have an account</Text>
               <Button
            title='Signup'
            accessibilityLabel='sign in to your donor account'
            touchSoundDisabled = {true}
            />
           
          </View>

       </View>
     
      
    </View>
    </SafeAreaView>
  )
}