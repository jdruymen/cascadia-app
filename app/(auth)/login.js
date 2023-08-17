import { auth } from "../../firebaseConfig";
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Pressable, } from 'react-native';
import { useState, useEffect } from "react";
import { Link, useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const router = useRouter();

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                router.replace("../(tabs)/menu")
            }
        })

        return unsubscribe
    }, []);

    const handleLogin = async () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log("Logged in with: ", user.email);
        })
        .catch(error => alert(error.message))
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
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
            </View>

            <View style={styles.buttonContainer}>
                <Pressable 
                    onPress={handleLogin}
                    style={styles.button} 
                >
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View>

            <View style={styles.buttonContainer}>
                <Link href={{ pathname: '/signUp' }} asChild>
                    <Pressable style={[styles.button, styles.buttonOutline]}>
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </Pressable>
                </Link>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 70,
    },
    inputContainer: {
        width: "80%",
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
    buttonOutline: {
        backgroundColor: 'white',
        borderColor: 'red',
        borderWidth: 2,
    },  
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: 'red',
        fontWeight: '700',
        fontSize: 16,
    },
});