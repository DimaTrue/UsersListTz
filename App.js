import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem} from 'react-native-material-ui';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?results=20')
      .then(res => console.warn(res.data));
  });
  return (
    <View>
      <Text>App</Text>
      <Icon name="rocket" size={30} color="#900" />
      <ListItem
        divider
        centerElement={{
          primaryText: 'Primary text',
        }}
        onPress={() => {}}
      />
    </View>
  );
};

export default App;
