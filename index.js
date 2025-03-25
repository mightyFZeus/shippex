/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import {PersistGate} from "redux-persist/integration/react";

const RootApp = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={null}>
                <NavigationContainer>
                <App />
            </NavigationContainer>
                </PersistGate>
                
           </Provider>
        </>
    )
}

AppRegistry.registerComponent(appName, () => RootApp);
