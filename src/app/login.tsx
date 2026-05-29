import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { login } from '../firebase/auth';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


const redirectUri = AuthSession.makeRedirectUri();
  const [request, response, promptAsync] =
    Google.useAuthRequest({
      webClientId: "164811898884-a0vhmqta8utvgvlvvtjtr818jjru2q3d.apps.googleusercontent.com",
      redirectUri,
    });

 useEffect(() => {
  const signIn = async () => {
    if (response?.type === "success") {
      const idToken = response.authentication?.idToken;

      if (!idToken) {
        console.error("No ID token found");
        return;
      }

      const credential =
        GoogleAuthProvider.credential(idToken);

      await signInWithCredential(
        getAuth(),
        credential
      );
    }
  };

  signIn();
}, [response]);

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <View className="flex-1 bg-gray-100 justify-center align-center px-6">
      <Text className="text-m font-normal text-blue-300">
        Login or Create a new account!
      </Text>
 <Button
      title="Continue with Google"
      disabled={!request}
      onPress={() => promptAsync()}
    />
      <TextInput placeholder="Email" className="text-m font-normal border-2 border-spacing-2  border-solid border-indigo-500 rounded-md" onChangeText={setEmail} />
      <TextInput placeholder="Password" className="text-m font-normal border-2 border-spacing-2  border-solid border-indigo-500 rounded-md" secureTextEntry onChangeText={setPassword} />
      
      <Button title="Login" onPress={handleLogin} />

      <Text className="text-m font-normal text-blue-300">
        Create a new account!
      </Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} />

        <Text className="text-s font-normal text-blue-300">
        Forgot password?
      </Text>
    </View>
  );
}
