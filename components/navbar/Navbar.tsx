import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Navbar(props:any) {
  const [toggle, settoggle] = useState(false);
  const [next,setnext] = useState(true);
  const nav: any = useNavigation();
  function Addexamination(){
    setnext(true)
      props.setformPage1(true);
      props.setFormPage2(true)
      props.setFormPage3(true)
      props.setFormPage4(true)

  }
  return (
    <>
      <View style={[style.container,props.style]}>
        <View style={style.left}>
          <View style={{width: 23}}>
            <TouchableOpacity onPress={() => settoggle(true)}>
              <Icon name="reorder-three-outline" size={30} color={'white'} />
            </TouchableOpacity>
          </View>
          {toggle ? (
            <View style={style.dropdown}>
              <View style={style.logo_less_then}>
                <View style={style.img}>
                  <Image source={require('../../Assetes/logo.png')} />
                </View>
                <View style={[style.img, style.less]}>
                  <TouchableOpacity onPress={() => settoggle(false)}>
                    <Icon name="chevron-back-outline" size={18} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>
              <View >
                <TouchableOpacity style={style.content} onPress={Addexamination}>
                <Image source={require('../../Assetes/examination.png')} />
                  <Text style={style.text_type}>Add Examination</Text>
                </TouchableOpacity>
              </View>
              <View style={style.content}>
                
              <TouchableOpacity style={{flexDirection:'row'}}  onPress={() => nav.navigate('reset')}>
                <>
                <Image source={require('../../Assetes/reset.png')} />
                  <Text style={style.text_type}>Reset Password</Text>
                  </>
                </TouchableOpacity>
              </View>
              <View style={style.line}></View>
              <View>
                <TouchableOpacity onPress={() => nav.navigate('login')}  style={style.logout}>
                <Image source={require('../../Assetes/logout.png')} />
                  <Text style={style.text_type}>Logout</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            ''
          )}
        </View>

        <View >
          
          {
            next ? <TouchableOpacity style={style.next_btn}  onPress={()=>{props.setformPage1(false),props.setFormPage2(false);setnext(false)}}>
            <Text style={style.text_color_next}>Next</Text>
            <Icon name='chevron-forward-outline' color={"white"} size={15}/>
            </TouchableOpacity>:""
          }

          {
            props.form2Page ? "" :
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={style.next_btn}  onPress={()=>{props.setformPage1(true);props.setFormPage2(true);setnext(true)}}>
        <Icon name='chevron-back-outline' color={"white"} size={15}/>
          <Text style={style.text_color_back}>back</Text>
          </TouchableOpacity>
          
         <TouchableOpacity style={style.next_btn} onPress={()=>{props.setFormPage2(true);props.setFormPage3(false)}}>
          <Text style={style.text_color_next}>Next</Text>
          <Icon name='chevron-forward-outline' color={"white"} size={15}/>
          </TouchableOpacity>
          </View>
          }

            {
            props.form3Page ? "" :
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={style.next_btn}  onPress={()=>{props.setFormPage3(true);props.setFormPage2(false)}}>
              <Icon name='chevron-back-outline' color={"white"} size={15}/>
              <Text style={style.text_color_back}>back</Text>
          </TouchableOpacity>
          
         <TouchableOpacity style={style.next_btn} onPress={()=>{props.setFormPage3(true);props.setFormPage4(false)}}>
          <Text style={style.text_color_next}>Next</Text>
          <Icon name='chevron-forward-outline' color={"white"} size={15}/>
          </TouchableOpacity>
          </View>
          }

           {
            props.form4Page ? "" :
            <View >
            <TouchableOpacity style={style.next_btn} onPress={()=>{props.setFormPage3(false);props.setFormPage4(true)}}>
              <Icon name='chevron-back-outline' color={"white"} size={15}/>
              <Text style={style.text_color_back}>back</Text>
          </TouchableOpacity>
          </View>
          }
           
        </View>
      </View>
     
    </>
  );
}

export default Navbar;
