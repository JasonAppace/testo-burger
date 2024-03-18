import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import * as NavigationService from './NavigationService';
import {Notification} from 'react-native-notifications';
import {StoreDeviceToken} from '../apis/auth';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    GetFCMToken();
  }
}

async function GetFCMToken() {
  // await AsyncStorage.removeItem('fcmtoken');
  let fcmtoken = await AsyncStorage.getItem('fcmtoken');
  console.log('fcmtoken', fcmtoken);
  if (!fcmtoken) {
    try {
      messaging()
        .registerDeviceForRemoteMessages()
        .then(async () => {
          // Now you can safely call getToken
          let fcmtoken = await messaging().getToken();
          StoreDeviceToken(fcmtoken);
          return fcmtoken;
        })
        .then(async token => {
          await AsyncStorage.setItem('fcmtoken', token);
          // Do something with the token
        })
        .catch(error => {
          console.error('Error registering device:', error);
        });
    } catch (e) {
      console.log('err', e);
    }
  }
}

function handleNotification(remoteMessage) {
  if (remoteMessage) {
    const {screen} = remoteMessage.data; // Assuming 'screen' is part of your data payload
    if (screen) {
      console.log('screen', screen);
      NavigationService.openedFromNotification = true;
      screen === 'Custom'
        ? NavigationService.navigate('DrawerNavigator', {
            screen: 'BottomTabScreen',
            params: {
              screen: 'HomeStack',
              params: {
                screen: 'Custom',
                params: {
                  product: JSON.parse(remoteMessage.data.item_details),
                },
              },
            },
          })
        : screen === 'Chat'
        ? NavigationService.navigate('DrawerNavigator', {
            screen: 'BottomTabScreen',
            params: {
              screen: 'OrderStack',
              params: {
                screen: 'Chat',
                params: {
                  orderId: remoteMessage.data.order_id,
                  from_notification: true,
                },
              },
            },
          })
        : NavigationService.navigate(screen, remoteMessage);
    }
  }
}

const NotificationListener = () => {
  // Assume a message-notification contains a "type" property in the data payload of the screen to open

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    handleNotification(remoteMessage);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        handleNotification(remoteMessage);
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('notification on foreground state...', remoteMessage);
    Notification.postLocalNotification({
      title: 'Local notification',
      body: 'This notification was generated by the app!',
    });
  });
};

export {NotificationListener, requestUserPermission};
