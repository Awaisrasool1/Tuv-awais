import React, { useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';

function CheckButton() {
    const [tick,settick] = useState(1)
    const data=[
     {
        id:1,
        lebel:'Within an interval of 3 months?'
     }  , 
     {
        id:2,
        lebel:'Within an interval of 6 months?'
     },
     {
        id:3,
        lebel:'Within an interval of 12 months?'
     },
     {
        id:4,
        lebel:'In accordance with an examination scheme?'
     },
     {
        id:5,
        lebel:'After the occurance of exceptional circumstances?'
     }
    ]
  return (
  <>
   {
    data.map((val)=>
    <View style={style.container}>
    <Text style={{marginTop:7}}>{val.lebel}</Text>
        <TouchableOpacity onPress={()=>settick(val.id)}  style={style.pressBtn}>
       {
        tick == val.id  ?<Icon name="check" color='green' size={10}/>  : ""
       }
       </TouchableOpacity>
    </View>
    )
   }
  </>
  )
}

export default CheckButton
