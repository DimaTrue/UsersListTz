import React from 'react';
import { View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

const Header = ({ filteringUsers }) => {
  return (
    <View>
      <Toolbar
        centerElement="Users List"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
          onChangeText: text => filteringUsers(text.toLowerCase()),
        }}
      />
    </View>
  );
};

export default Header;
