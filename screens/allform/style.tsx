import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '700',
    // textAlign: 'center',
    paddingLeft: 18,
    paddingTop: 10,
    fontFamily: '',
  },
  Container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 12,
  },
  lebel: {
    fontSize: 16,
    fontWeight: '700',
    zIndex: -1,
    paddingBottom: 2,
  },
  signature: {
    // marginTop:20,
    marginLeft:90,
    width: 183,
    height:183,
  },
  sameBtn:{
    marginLeft:11,
    marginTop:20,
    fontSize:13,
    fontWeight:'600',
    width:183,
    height:35,
    backgroundColor:"#E33629",
    color:"white",
    textAlign:"center",
    textAlignVertical:"center",
    borderRadius:10,
  }
});

export default style;
