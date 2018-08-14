//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component
const Header = () => {
  //Em vez disto podiamos por diretamente na tag style.viewStyle
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums</Text>
    </View>
  );
};

const styles = {
  //Styles View tags
  viewStyle: {
    backgroundColor:'#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15
  },
  //Styles Text tags
  textStyle:{
    fontSize: 20
  }
};

//Make the component available to other parts of the app
export default Header;
