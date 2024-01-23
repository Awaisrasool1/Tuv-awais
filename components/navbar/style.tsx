import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: 59,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent:"space-between",
    elevation:10,
  },
  left: {
    paddingLeft: 17,
    },
  // right: {
  //   color: 'white',
  //   marginRight: 50,
  // },
  dropdown: {
    width: 147,
    height: 206,
    backgroundColor: '#303030',
    position: 'absolute',
    top: -19,
  },
  logo_less_then: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingLeft:4
  },
  img: {
    paddingLeft: 6,
    paddingTop: 9,
  },
  less:{
       paddingRight:10,
  },
  content: {
    flexDirection: 'row',
    paddingTop: 22,
    color: 'white',
    alignItems:'center',
    justifyContent:'center'
  },
  text_type: {
   
    color: 'white',
    paddingLeft: 9,
    fontSize: 12,
  },
  logout:{
    flexDirection:'row',
    paddingLeft:18
  },
  line:{
    backgroundColor:'#DDDDDD',
    width:120,
    height:2,
    marginTop:15,
    marginBottom:15,
    marginLeft:14,
    borderRadius:10
  },
  next_btn:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:13
  },
  text_color_next:{
     color:'white',
     fontSize:14,
     paddingRight:6
  },
  text_color_back:{
    color:'white',
    fontSize:14,
    paddingLeft:6
 },
});
export default style;
