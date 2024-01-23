import React from 'react';
import {TextInput, View} from 'react-native';
import style from './style';

function FormInput(props: any) {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          keyboardType={props.type}
          placeholder="enter value"
          style={style.FormInput}
          onChange={(e:any) => props.onChange(e)}
        />
      </View>
    </>
  );
}

export default FormInput;
