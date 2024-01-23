import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  dropDownSelected: {
    elevation: .7,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    borderWidth: 1,
    borderColor: '#DDDD',
    height: 30,
    width: 345,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 6,
  },
  dropArea: {
    borderBottomRightRadius: 7,
    borderBottomLeftRadius: 7,
    width: 345,
    height: 86,
    elevation: 10,
    backgroundColor: '#303030',
    alignSelf: 'center',
    position: 'absolute',
    top: 75,
    right: 27,
  },
  data: {
    width: 250,
    padding: 3,
  },
});

export default style;
