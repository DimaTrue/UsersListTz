import React, { useEffect } from 'react';
import { View, Text, FlatList, YellowBox } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getUsersListInit } from 'store/reducers/users';
import UserItem from 'components/UserItem';

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

const UsersList = () => {
  const isLoading = useSelector(state => state.users.isLoading);
  const users = useSelector(state => state.users.usersList);
  const error = useSelector(state => state.users.error);

  const dispatch = useDispatch();

  useEffect(() => {
    (async function() {
      await dispatch(getUsersListInit());
    })();
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <UserItem
      firstname={item.name?.first}
      lastname={item.name?.last}
      id={item?.id}
      avatar={item?.picture?.thumbnail}
    />
  );

  const keyExtractor = ({ login }) => login.md5;

  if (isLoading) {
    return (
      <View>
        <Text>LOADING...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>UsersList</Text>
      <FlatList
        initialNumToRender={20}
        horizontal={false}
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default UsersList;
