import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import style from './style'

function RedioButton() {
    const data = [
        {
            id:1,
            lebel:"Thorough Examination"
        },
        {
            id:2,
            lebel:"Visual Inspection"
        }
    ]
    const [check,setcheck] = useState(2)
  return (
   <>
         <View style={style.container}>
           {
            data.map((val,index)=><>
             <TouchableOpacity key={index} style={style.container1} onPress={()=>setcheck(val.id)}>
            {
              check == val.id ? <View style={style.container2}></View> :""
            }
             </TouchableOpacity>
             <Text style={style.lebel}>{val.lebel}</Text>
            </>)}   
   </View>
   </>
  )
}

export default RedioButton
