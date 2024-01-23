import React from 'react'
import { View,Text, Image, StyleSheet } from 'react-native';
import Buttons from '../../components/buttons/Button';
import { useNavigation } from '@react-navigation/native';
import LottieView from "lottie-react-native";

function FinalPage() {
  const nav:any = useNavigation()
  return (
    <> 
    <View style={{height:350}}>
    <LottieView style={{flex:1}} loop={false} autoPlay source={require('../../Assetes/animation3.json')} />
    </View>
    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:24,fontWeight:'600'}}>Succeed</Text>
    <Text style={{fontSize:12,marginBottom:20}}>Report successfully submit</Text>
    <Buttons  title={"Download PDF"}  style={style.sameBtn}/>
    <View style={{marginTop:15}}>
    <Buttons  title={"Finish"} style={style.sameBtn} onPress={()=>{nav.navigate("form")}} />
    </View>
    </View>
    </>
  )
}
const style= StyleSheet.create({
  sameBtn:{
    // marginTop:25,
    fontSize:12,
    fontWeight:'600',
    width:183,
    height:35,
    backgroundColor:"#E33629",
    color:"white",
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:10,
  }
})
export default FinalPage
