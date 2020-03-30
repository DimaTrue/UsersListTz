import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getUsersListInit } from 'store/reducers/users';

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

  return (
    <View>
      <Text>UsersList</Text>
    </View>
  );
};

export default UsersList;
