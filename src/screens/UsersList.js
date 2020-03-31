import React, { useEffect } from 'react';
import { View, Text, FlatList, YellowBox, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getUsersListInit, filterUsers } from 'store/reducers/users';
import UserItem from 'components/UserItem';
import Header from 'components/Header';

YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);

const UsersList = ({ navigation }) => {
  const isLoading = useSelector(state => state.users.isLoading);
  const users = useSelector(state => state.users.filteredUsersList);
  const error = useSelector(state => state.users.error);

  const dispatch = useDispatch();

  useEffect(() => {
    (async function() {
      await dispatch(getUsersListInit());
    })();
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <UserItem {...item} navigation={navigation} />
  );

  const keyExtractor = ({ login }) => login.md5;

  const filteringUsers = text => dispatch(filterUsers(text.toLowerCase()));

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
    <SafeAreaView>
      <Header filteringUsers={filteringUsers} />
      <FlatList
        initialNumToRender={20}
        horizontal={false}
        data={users}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
};

export default UsersList;
