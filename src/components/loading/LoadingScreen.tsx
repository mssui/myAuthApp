import { Text, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';


export default function LoadingScreen() {
    const { user } = useAuth();

    return (
        <View className="flex-1 items-center justify-center bg-white p-6">

            <Text className="mt-2 text-gray-500">
                Loading...
            </Text>

        </View>
    );
}