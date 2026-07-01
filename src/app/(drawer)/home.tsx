import { getAuth } from 'firebase/auth';
import { useEffect } from "react";
import { Button, Text, View } from 'react-native';
import { getMe, logout } from '../../firebase/auth';

export default function HomeScreen() {
  const handleLogout = async () => {
    await logout();
  };

  const testBackend = async () => {
    try {
      const user = getAuth().currentUser;

      if (!user) {
        console.log("No user");
        return;
      }

      const token = await user.getIdToken();

      console.log("Token exists:", !!token);

      const response = await fetch(
        "http://localhost:3001/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
  async function loadUser() {
    try {
      const me = await getMe();
      console.log(me);
    } catch (err) {
      console.error(err);
    }
  }

  loadUser();
}, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome! You are logged in 🎉</Text>
      <Text className="text-white text-4xl font-bold">
        NativeWind?
      </Text>
      <Button title="Logout" onPress={handleLogout} />

      <Button
        title="Test Backend"
        onPress={testBackend}
      />
    </View>
  );
}


