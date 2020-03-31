import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/store/store';
import UsersList from './src/screens/UsersList';

const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <UsersList />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
