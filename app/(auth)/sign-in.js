import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';

function AuthScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      // Navigation or state change upon successful login, e.g.:
      // navigateToHomeScreen();
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        // User is logged in , navigate to home screen
      }
    });

    // Cleanup the observer when the component is unmounted.
    return unsubscribe;
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16 }}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={{ padding: 12, borderWidth: 1, marginBottom: 12 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={{ padding: 12, borderWidth: 1, marginBottom: 12 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default AuthScreen;
