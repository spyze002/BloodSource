import { View, Text, SafeAreaView, Image, TextInput, Button } from 'react-native'
import React from 'react'


const Signup = () => {
const logo = require ('../../Logos/BloodSource1.png');

  return (
   <SafeAreaView>
       {/**first container to hold the image */}
       <View
       style={{
           display: 'flex',
           justifyContent: 'center',
           alignItems:'center',
           width: '100%',
           height: 150
       }}
       >
           <Image 
           source={logo}
           style ={{
               width: 200,
               height: 150
           }}
           
           />
          
       </View>
       <View style={{
            display: 'flex',
            backgroundColor: '#FF0A00',
            height: 570,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            alignItems: 'center'
       }}>
           {/**container to hold all the input credentails plus the signup button */}
           <View style={{
               display: 'flex',
               width: '90%',
               height: 400,
               justifyContent: 'space-evenly',
               alignItems: 'center'
           }}>
               {/**view to hold only input credentials */}
               <TextInput
               placeholder='Enter your name'
               placeholderTextColor={'black'}
               style={{
                 backgroundColor: 'pink',
                 width: '90%',
                 borderRadius: 10
               }}

               />
               <TextInput
               placeholder='Mobile Number'
               placeholderTextColor={'black'}
               keyboardType ={'numeric'}
               style={{
                 backgroundColor: 'pink',
                 width: '90%',
                 borderRadius: 10
               }}

               />
               <TextInput
               placeholder='ID Num'
               placeholderTextColor={'black'}
               style={{
                 backgroundColor: 'pink',
                 width: '90%',
                 borderRadius: 10
               }}

               />
               <TextInput
               placeholder='Create password'
               placeholderTextColor={'black'}
               secureTextEntry
               style={{
                 backgroundColor: 'pink',
                 width: '90%',
                 borderRadius: 10
               }}

               />
               <TextInput
               placeholder='Confirm password'
               placeholderTextColor={'black'}
               secureTextEntry
               style={{
                 backgroundColor: 'pink',
                 width: '90%',
                 borderRadius: 10
               }}

               />

              
           </View>
           <View style={{
               display: 'flex',
               width: 200,

           }}>
               {/**View to hold only btn */}
               <Button
                 title='Signup'
                 accessibilityLabel='sign in to your donor account'
                 touchSoundDisabled = {true}
                 
               />
           </View>
       </View>
   </SafeAreaView>
  )
}

export default Signup