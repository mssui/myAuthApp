import { Text } from 'react-native';
import Avatar from '../../components/display/Avatar';
import Card from '../../components/layout/Card';
import Screen from '../../components/layout/Screen';

import { useAuth } from '../../hooks/useAuth';

export default function ProfileScreen() {
  const { user } = useAuth();

  return (
    <Screen>

      {user?.photoURL && (
        <Avatar user={user} />
      ) || null}

      <Card>
        <Text className="text-xl font-bold">
            {user?.displayName ?? "Unknown User"}
        </Text>
   
        <Text>
            {user?.email}
        </Text>
  
        <Text>
            {user?.providerData[0]?.providerId}
        </Text>
    </Card>

    </Screen>
  );
}