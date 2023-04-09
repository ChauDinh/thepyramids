import React from 'react';
import {View} from 'react-native';

const CustomDivider = props => {
  return <View style={{...props?.customStyle}} />;
};

export default CustomDivider;
