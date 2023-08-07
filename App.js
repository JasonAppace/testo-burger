import React, {useEffect} from 'react';
import {Color, Font} from './src/globalStyle/Theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {PaperProvider} from 'react-native-paper';

// Redux State
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './src/redux';

///
import {
  NotificationListener,
  requestUserPermission,
} from './src/utils/pushnotification_helper';
import RootStack from './src/navigation/RootStack';
import Geocoder from 'react-native-geocoding';
import {google_api_key} from './src/utils/googleCloudApi';
import {StripeProvider} from '@stripe/stripe-react-native';
import {StatusBar} from 'react-native';
import {LogBox} from 'react-native';

// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

// //Ignore all log notifications
// LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListener();
  }, []);
  Geocoder.init(google_api_key); // use a valid API key

  const store = createStore(rootReducer, composeWithDevTools);

  const theme = {
    roundness: 2,

    colors: {
      primary: Color.primary,
      accent: Color.tertiary,
      backdrop: Color.tertiary,
      background: Color.tertiary,
      text: Color.light,
      placeholder: Color.light,
      onSurface: Color.light,
      disabled: Color.light,
      surface: Color.tertiary,
    },
  };
  return (
    <Provider store={store}>
      <StripeProvider
        publishableKey="pk_test_xEVXxVXXe7ywigzB1O8SadA0"
        // urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
      >
        <SafeAreaProvider>
          <PaperProvider theme={theme}>
            <GestureHandlerRootView
              style={{flex: 1, backgroundColor: '#F9F9F9'}}>
              <FlashMessage
                position="top"
                statusBarHeight={getStatusBarHeight}
                floating
                textStyle={{fontFamily: Font.Urbanist_Regular}}
                style={{marginTop: 10}}
              />
              <StatusBar
                animated={true}
                backgroundColor={'#F9F9F9'}
                barStyle={'dark-content'}
                showHideTransition={'fade'}
              />
              <RootStack />
            </GestureHandlerRootView>
          </PaperProvider>
        </SafeAreaProvider>
      </StripeProvider>
    </Provider>
  );
};

export default App;
