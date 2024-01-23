import React, {useState} from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import Textinput from '../../components/texInput/Textinput';
import Buttons from '../../components/buttons/Button';
import Exstyle from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

function ResetPassword() {
  const rgExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const [passowrd, setpassword] = useState('');
  const [Confirmpassowrd, setConfirmpassword] = useState('');
  const [seacure, setseacure] = useState(true);
  const [conseacure, setconseacure] = useState(true);
  const nav: any = useNavigation();

  return (
    <>
      <View style={Exstyle.container}>
        <View>
          <Image source={require('../../Assetes/login.png')} />
        </View>
        <View style={{margin: 15}}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>
            Please Reset your Password
          </Text>
        </View>
        <View>
          <Text style={Exstyle.lebel}>Password</Text>
          <Textinput
            issecureTextEntry={seacure}
            placeholder={' New Password'} 
            styles={Exstyle}
            onChange={setpassword}
            icons={
              <TouchableOpacity
                onPress={() => {
                  setseacure(pre => !pre);
                }}>
                {seacure ? (
                  <Icon name="eye" size={20} color={'black'}></Icon>
                ) : (
                  <Icon name="eye-slash" size={20} color={'black'}></Icon>
                )}
              </TouchableOpacity>
            }
          />

          {passowrd == '' || passowrd.match(rgExp) ? 
            '':  <Text style={Exstyle.emailError}>Password error</Text> }

          <Text style={Exstyle.lebel}>Confirm new Password</Text>
          <Textinput
            issecureTextEntry={conseacure}
            styles={Exstyle}
            placeholder={'Confirm Password '} 
            onChange={setConfirmpassword}
            icons={
              <TouchableOpacity
                onPress={() => {
                  setconseacure(pre => !pre);
                }}>
                {conseacure ? (
                  <Icon name="eye" size={20} color={'black'}></Icon>
                ) : (
                  <Icon name="eye-slash" size={20} color={'black'}></Icon>
                )}
              </TouchableOpacity>
            } />
          {Confirmpassowrd == '' || Confirmpassowrd == passowrd ? 
            '':  <Text style={Exstyle.emailError}>Passowrd is not mach</Text> }
        </View>
        <Buttons
          title={'Save'}
          style={Exstyle.sameBtn}
          onPress={() => nav.navigate('form')}
        />
      </View>
    </>
  );
}
export default ResetPassword;
