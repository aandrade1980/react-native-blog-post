import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import IndexScreen from './src/screen/IndexScreen';
import ShowScreen from './src/screen/ShowScreen';
import CreateScreen from './src/screen/CreateScreen';
import EditScreen from './src/screen/EditScreen';

import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
      headerTitleAlign: 'center'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
