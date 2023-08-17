import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { auth } from "../../firebaseConfig"
import { signOut } from "firebase/auth";

export default function Account() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      router.replace("../(auth)/login");
    })
    .catch(error => alert(error.message))
  }
    
  return (
    <View style={styles.container}>
      <Text>Welcome {auth.currentUser?.displayName}</Text>
      <Text>Email: {auth.currentUser?.email}</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Log out</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: "center",
        justifyContent: "center",
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