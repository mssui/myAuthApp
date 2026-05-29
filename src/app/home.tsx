import { getAuth, signOut } from 'firebase/auth';
import { Button, Text, View } from 'react-native';


export default function HomeScreen() {
  const handleLogout = async () => {
    await signOut(getAuth());
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome! You are logged in 🎉</Text>
        <Text className="text-white text-4xl font-bold">
        NativeWind?
      </Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}


