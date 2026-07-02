
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

export default function HomeScreen() {
  const { user, logout } = useAuth();
  
  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome! {user?.displayName} 🎉</Text>
      <Text className="text-white text-4xl font-bold">
        NativeWind?
      </Text>
      
      <Button title="Logout" onPress={logout} />
    </View>
  );
}


