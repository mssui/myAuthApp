import { Image, Text, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';


export default function ProfileScreen() {
  const { user } = useAuth();

  return (
    <View className="flex-1 items-center justify-center bg-white p-6">

      {user?.photoURL && (
        <Image
          source={{ uri: user.photoURL }}
          className="w-28 h-28 rounded-full"
        />
      ) || null}

      <Text className="mt-6 text-2xl font-bold">
        {user?.displayName ?? "Unknown User" }
      </Text>

      <Text className="mt-2 text-gray-500">
       {user?.email ?? ""}
       {user?.providerData[0]?.providerId || ""}
      </Text>

    </View>
  );
}