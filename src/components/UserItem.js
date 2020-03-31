import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-material-ui';
import { useDispatch } from 'react-redux';

import { getCurrentUserDetails } from 'store/reducers/users';

const UserItem = React.memo(props => {
  const { name, id, picture, navigation } = props;
  const dispatch = useDispatch();
  const userAvatar = picture?.thumbnail?.length ? (
    <Avatar
      image={
        <Image style={styles.avatar} source={{ uri: picture?.thumbnail }} />
      }
    />
  ) : (
    <Avatar icon="person" />
  );

  return (
    <View>
      <Card>
        <TouchableOpacity
          onPress={() => {
            dispatch(getCurrentUserDetails(props));
            navigation.navigate('UserDetails');
          }}>
          <ListItem
            leftElement={userAvatar}
            centerElement={{
              primaryText: `${name?.first} ${name?.last}`,
              secondaryText: `${id?.name} ${id?.value}`,
            }}
          />
        </TouchableOpacity>
      </Card>
    </View>
  );
});

export default UserItem;

const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
