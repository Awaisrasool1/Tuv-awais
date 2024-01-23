import { StyleSheet } from "react-native";

const Style  = StyleSheet.create({
  container:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:100
 },
 lebel:{
    fontSize:14,
   //  fontFamily:'Roboto',
    fontWeight:'600',
    marginTop:20,
    marginBottom:3
 },
 emailError:{
    color:'red'
 },
 sameBtn:{
   marginTop:25,
   fontSize:15,
   fontWeight:'600',
   width:250,
   height:35,
   backgroundColor:"#E33629",
   color:"white",
   textAlign:"center",
   textAlignVertical:"center",
   borderRadius:10,
}
}) 

export default Style;
