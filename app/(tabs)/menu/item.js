import { StyleSheet, Text, View, Image } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { Pressable } from "react-native";
import { useState } from "react";

export default function index() {
    const params = useLocalSearchParams();
    const imgNum = parseInt(params.img)
    const [quantity, setQuantity] = useState(1);
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

    function decreaseQ() {
        if (quantity != 1) {
            setQuantity( quantity - 1 )
        }
    };

    function increaseQ() {
        if (quantity != 99) {
            setQuantity( quantity + 1 )
        }
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerTitle: params.label }} />
            <View style={styles.topContainer} >
                <Text style={styles.header}>{params.label}</Text>
                <Text style={styles.price}>${params.price}</Text>
            </View>

            <View style={styles.bottomContainer}>

                <Image source={imgNum} style={styles.image} />

                <View style={styles.quantitySelector}>
                    <Pressable style={styles.roundButton} onPress={decreaseQ}>
                        <Text style={styles.symbol}>-</Text>
                    </Pressable>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <Pressable style={styles.roundButton} onPress={increaseQ}>
                        <Text style={styles.symbol}>+</Text>
                    </Pressable>
                </View>

                <View style={styles.description}>
                    <Text>Garlic base sauce bread sticks topped with cheese blend and served with red sauce.</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Add to cart</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        justifyContent: "flex-start",
        alignItems: "stretch",
        paddingTop: "12%",
        paddingLeft: "5%"
    },
    bottomContainer: {
        //alignItems: "center",
        //justifyContent: "center",
        paddingTop: "20%",
    },
    image: {
        resizeMode: "contain",
        height: 250,
        alignSelf: "center"
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
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
    header: {
        fontSize: 24,
        fontWeight: 600,
    },
    price: {
        fontSize: 10,
    },
    quantitySelector: {
        flexDirection: "row",
        paddingLeft: "5%",
        alignItems: "center",
    },
    roundButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
    },
    symbol: {
        fontSize: 20,
        fontWeight: 500,
    },
    quantityText: {
        fontSize: 16,
        padding: 10,
    },
    description: {
        paddingLeft: '5%',
        paddingRight: '5%',
        padding: '2%',
    }
});