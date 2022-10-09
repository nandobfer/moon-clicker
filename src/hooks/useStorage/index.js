import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export const useStorage = () => {

    const setData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('stats', jsonValue)
        } catch (e) {
          // saving error
        }
      }

      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('stats')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
        }
      }

      return {getData, setData}
}