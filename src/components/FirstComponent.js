import * as React from 'react';
import {Card} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

const MyComponent = () => (
  <TouchableOpacity>
    <Card>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    </Card>
  </TouchableOpacity>
);

export default MyComponent;
