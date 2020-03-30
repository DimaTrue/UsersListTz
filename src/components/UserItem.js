import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-material-ui';

const UserItem = React.memo(({ firstname, lastname, id, avatar }) => {
  const userAvatar = avatar?.length ? (
    <Avatar image={<Image style={styles.avatar} source={{ uri: avatar }} />} />
  ) : (
    <Avatar text="JM" />
  );

  return (
    <View>
      <Card>
        <TouchableOpacity>
          <ListItem
            leftElement={userAvatar}
            centerElement={{
              primaryText: `${firstname} ${lastname}`,
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
