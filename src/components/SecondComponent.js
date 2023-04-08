import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';

const MyComponent = () => (
  <TouchableOpacity>
    <Card>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    </Card>
  </TouchableOpacity>
);

export default MyComponent;
