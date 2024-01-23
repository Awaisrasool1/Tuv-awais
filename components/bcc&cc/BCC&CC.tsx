import React from 'react';
import { View,Text,TouchableOpacity,TextInput } from 'react-native';
import { useState } from 'react';
import style from './style'
function BCCCC(props:any) {
    //* form 4 related   *//
  const [BCC, setBCC] = useState(false);
  const [CC, setCC] = useState(false);
  const [type, setype] = useState(true);
  const [removeBcc, setRemoveBcc] = useState(true);
  const [removeCc, setRemoveCc] = useState(true);
  const [email,setemail] = useState('');
  const emailValidation = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{3,6}$/;
  //*                            *//
  return (
  <>
           <View style={style.container}>
              <Text style={style.lebel}>Email To</Text>
              {type ? 
                <View style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={() => { setCC(true);setype(false); }} >
                    <Text style={[style.lebel,style.same]}>CC</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {setBCC(true);setype(false); }}  >
                    <Text style={style.lebel}>BCC</Text>
                  </TouchableOpacity>
                </View>
               :  ""}
            </View>
            <TextInput style={style.inputbox} placeholder='Example@gmail.com'  onChangeText={(e)=>setemail(e)}/>
           {
            email == '' || email.match(emailValidation) ? "" :
            <Text style={{fontSize:13,color:'red',marginTop:3}}>Email is not valid</Text>
           }
            {CC ? 
              <>
              <View style={style.container}>
                <Text style={style.lebel}> Cc</Text>
                {removeBcc ? 
                  <TouchableOpacity onPress={() => {setBCC(true);setRemoveBcc(false);setRemoveCc(false); }}>
                   <Text style={style.lebel}>Bcc</Text>
                  </TouchableOpacity>
                 :""}
              </View>
              <TextInput style={style.inputbox} placeholder='Example@gmail.com'/>
              </>: ""}

            {BCC ? 
              <>
              <View  style={style.container}>
                <Text style={style.lebel}>BCC</Text>
                {removeCc ? 
                  <TouchableOpacity onPress={() => {setCC(true); setRemoveBcc(false); setRemoveCc(false);}}>
                    <Text style={style.lebel}>CC</Text>
                  </TouchableOpacity>
                 : ""}
              </View>
              <TextInput  style={style.inputbox} placeholder='Example@gmail.com'/>
              </>:  ""}
  </>
  )
}

export default BCCCC
