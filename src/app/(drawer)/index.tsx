import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import "../../../global.css";
import { subscribeToAuthChanges } from '../../firebase/auth';

export default function Index() {
  const [loading, setLoading] = useState(true);
console.log("Index mounted");
  useEffect(() => {
      console.log("Index mounted");

    const unsubscribe = subscribeToAuthChanges((user) => {
      console.log("observeAuth fired");
    console.log("User:", user?.email);
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