import React, { useState } from 'react'
import { Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import Icon from'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import style from './style'

export default () => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <>
     <View>
      
        <TouchableOpacity onPress={()=>{setOpen(true)}}>
            <View style={style.container}>
        <Text style={{fontSize:16}}>{[date.getMonth()+1,'/',date.getDate(),'/',date.getFullYear()]}</Text>
     <Icon name='calendar-outline' size={25} style={{marginBottom:5}} />
     </View>
     </TouchableOpacity>
      <DatePicker
        modal
        mode='date'
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </View>
    </>
  )
}