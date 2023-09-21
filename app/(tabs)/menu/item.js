import { StyleSheet, Text, View, Image } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Pressable } from "react-native";

export default function index() {
    const params = useLocalSearchParams();
    const imgNum = parseInt(params.img)
    const data = { name: "John H." };

    async function createOrder() {
        fetch("https://cascadia-express-test.azurewebsites.net/createOrder", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((body) => {
            console.log(body);
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                headerTitle: params.label,
            }} />
            <Image source={imgNum} style={styles.image} />
            <Text>{params.label}</Text>
            <Text>{params.price}</Text>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={createOrder}>
                    <Text style={styles.buttonText}>Order this item</Text>
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
        fontSize: 30,
    },
    image: {
        resizeMode: "contain",
        height: 250,
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