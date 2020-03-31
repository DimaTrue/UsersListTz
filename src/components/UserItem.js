import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-material-ui';

const UserItem = React.memo(props => {
  const { name, id, picture, navigation } = props;
  const userAvatar = picture?.thumbnail?.length ? (
    <Avatar
      image={
        <Image style={styles.avatar} source={{ uri: picture?.thumbnail }} />
      }
    />
  ) : (
    <Avatar text="JM" />
  );

  return (
    <View>
      <Card>
        <TouchableOpacity onPress={() => navigation.navigate('UserDetails')}>
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
