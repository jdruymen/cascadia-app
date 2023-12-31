import { auth } from "../../firebaseConfig";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Pressable} from 'react-native';
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function signUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSignUp = () => {
    if (password === confirmPass) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const user = userCredential.user;
          updateProfile(user, { displayName: name });
          console.log("Registered with: ", user.email);
        })
        .catch(error => alert(error.message))
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <Text style={styles.header}>Create an account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={text=>setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text=>setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text=>setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm password"
          value={confirmPass}
          onChangeText={text=>setConfirmPass(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <Pressable 
        onPress={handleSignUp}
        style={styles.button} 
        >
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 50,
    paddingBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },  
  input: { 
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: "red",
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },
});