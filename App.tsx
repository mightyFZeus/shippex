import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import BootSplash from "react-native-bootsplash";
import AuthStack from './src/navigation/AuthStack';
import BottomTab from './src/navigation/BottomTab';
import { useAppSelector } from './src/store/hooks'
const App = () => {

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log("BootSplash has been hidden successfully");
    });
  }, []);

  const { isLoggedIn } = useAppSelector(state => state.app)

  return isLoggedIn ? <BottomTab /> : <AuthStack />;
};

export default App;

