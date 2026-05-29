import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import "../../global.css";
import { observeAuth } from '../firebase/auth';

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = observeAuth((user) => {
      if (user) {
        router.replace('/home');
      } else {
        router.replace('/login');
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  );
}