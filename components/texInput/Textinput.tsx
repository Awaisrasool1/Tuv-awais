import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './style';

function Textinput(props: any) {
  const va: any = {position: 'absolute', right: 6};
  return (
    <>
      <View style={styles.tw}>
        <TextInput
          secureTextEntry={props.issecureTextEntry}
          style={styles.TexBox}
          onChangeText={e => {
            props.onChange(e);
          }}
          placeholder={props.placeholder}
        />
        <View style={va}>{props.icons}</View>
      </View>
    </>
  );
}
export default Textinput;
