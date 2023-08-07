import { Text, View } from 'react-native';
import { useAuth } from '../../components/auth';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login() {
  const { setUser } = useAuth();

  const login = () => {
    setUser({
      name: "John Doe",
    });
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={login}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}