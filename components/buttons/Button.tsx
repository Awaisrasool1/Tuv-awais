import React from 'react'
import { View,TouchableOpacity, Text } from 'react-native'
import style from './style';

function Button(props :any) {
  return (
    <View>
   <TouchableOpacity onPress={props.onPress}>
    <Text style={props.style}>{props.title}</Text>
   </TouchableOpacity>
    </View>
  )
}
export default Button;
