import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Textinput from '../../components/texInput/Textinput';
import Exstyle from './style';
import Buttons from '../../components/buttons/Button';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [seacure, setseacure] = useState(true);
  const emailValidation = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{3,6}$/;
  const nav: any = useNavigation();
  return (
    <>
      <View style={Exstyle.container}>
        <View>
          <Image source={require('../../Assetes/login.png')} />
        </View>
        <View>
          <Text style={Exstyle.lebel}>E-mail / Username</Text>
          <Textinput
            issecureTextEntry={false}
            onChange={setemail}
            placeholder={'Enter Email'}  />
          {email == '' || email.match(emailValidation) ? 
            '' :  <Text style={Exstyle.emailError}>Email is not valid</Text> }
          <Text style={Exstyle.lebel}>Password</Text>
          <Textinput
            issecureTextEntry={seacure}
            placeholder={'Enter Passowrd'}
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
        </View>

        <Buttons
          title={'Login'}
          style={Exstyle.sameBtn}
          onPress={() => nav.navigate('reset')}
        />
      </View>
    </>
  );
}

export default Login;
