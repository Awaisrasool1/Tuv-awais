import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style'

function SelectButton() {
    const selectItem=[
        {lebel:"Lifting Equipment(LEEA Approved):",},
        {lebel:"Accessories (LEEA Approved)",},
        {lebel:"General Items",}
    ]
    const [SelectOption,setSelectOption] = useState('Lifting Equipment(LEEA Approved):')
    const [isClicked,setisClicked] = useState(false);
    const [data,setdata] = useState(selectItem)
    
  return (
   <>
      <View style={style.container}>
        <TouchableOpacity style={style.dropDownSelected} onPress={()=>setisClicked(!isClicked)}>
          <Text>{SelectOption}</Text>
          {
            isClicked ? <Icon name='chevron-up-outline' size={22}/> : <Icon name='chevron-down-outline' size={22}/>
          }
        </TouchableOpacity>
      </View>
      {
        isClicked ? <View style={style.dropArea}>
           {
            data.map((val,index)=>
                <TouchableOpacity key={index} style={style.data} onPress={()=>{setSelectOption(val.lebel);setisClicked(false)}}>
                <Text style={{color:'white',paddingLeft:5}}>{val.lebel}</Text>
              </TouchableOpacity>
            )
           }
        </View> :""
      }
      
   </>
  )
}

export default SelectButton
