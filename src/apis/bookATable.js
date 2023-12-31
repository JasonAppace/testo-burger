import axios from '../axios';
import {showMessage, hideMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function postBooking(body, setLoading, token, func) {
  try {
    setLoading(true);
    const {data} = await axios.post('customer/table-reservation', body, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (data) {
      setLoading(false);
      func();
    }
  } catch (err) {
    setLoading(false);
    console.log('error', err.response.data);
  }
}
export async function getBookings(setLoading, token, setData) {
  try {
    setLoading(true);
    const {data} = await axios.get('customer/get-table-reservation', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (data) {
      setLoading(false);
      setData(data);
    }
  } catch (err) {
    setLoading(false);
    console.log('error', err.response.data);
  }
}
