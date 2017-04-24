import React from 'react';
import ExNavigator from '@expo/react-native-navigator';
import Routes from '../../config/routes';
import Wallpaper from '../../components/Wallpaper';


const LoggedOut = () => {
  const route = Routes.getSignInRoute();
  return (


    <ExNavigator
      initialRoute={route}
      style={{ flex: 1 }}
      showNavigationBar={route.showNavigationBar}
    />


  );
};

export default LoggedOut;
