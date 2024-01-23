import React from 'react';
import {Text,View,TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import style from './style';

function CheckButton(props: any) {
  const jawab = [
    {
      id: 1,
      lebel: 'Yes',
    },
    {
      id: 2,
      lebel: 'No',
    },
  ];
  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
        {jawab.map(val => (
          <>
            <View style={style.container}>
              <Text style={style.check_lebel}>{val.lebel}</Text>
              <TouchableOpacity onPress={() => {props.settick(val.id)}}
                style={{paddingLeft: 10, paddingRight: 10}}>
                <View style={style.teck_btn}>
                  {props.tick == val.id ? <Icon name="check"></Icon> : ''}
                </View>
              </TouchableOpacity>
            </View>
          </>
        ))}
      </View>
    </>
  );
}
export default CheckButton;
