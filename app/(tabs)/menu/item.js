import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Stack, useLocalSearchParams, useRouter, Link } from "expo-router";
import { Pressable } from "react-native";
import { useState } from "react";
import { database, auth } from "../../../firebaseConfig";
import { ref, push, set,  } from "firebase/database";
import Modifier from "../../../components/modifier";

export default function index() {
    const [quantity, setQuantity] = useState(1);
    const [isModalVisible, setModalVisible] = useState(false);
    const [modifiers, setModifiers] = useState([]);

    const params = useLocalSearchParams();
    const imgNum = parseInt(params.img)
    const router = useRouter();


    async function createOrder() {
        const data = { name: "John H." };

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

    function addItem() {
        if (params.available === "true") {
            const listRef = ref(database, 'carts/' + auth.currentUser?.uid);
            const newListRef = push(listRef);
            set(newListRef, {
                name: params.label,
                price: params.price,
                quantity: quantity,
                mods: modifiers,
            });
            
            router.back();
        }
        else {
            alert("Item is currently unavailable")
        }
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

    const onModify = () => {
        setModalVisible(true);
    };

    const onModalClose = (selectedMods) => {
        setModifiers([...selectedMods]);
        setModalVisible(false);
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
                
                <View style={{ paddingTop: 10, paddingBottom: 10, }}>
                    {modifiers.length != 0 && (
                        <View>
                        <FlatList data={modifiers.slice(0, 3)} renderItem={({item}) => 
                            <Text style={{ marginLeft: "auto", paddingRight: "5%" }}>{item}</Text>
                        } />
                        {modifiers.length > 3 && (
                            <Text style={{ marginLeft: "auto", paddingRight: "5%" }}>And {modifiers.length - 3} more...</Text>
                        )}
                        </View>
                    )}
                </View>

                <View style={styles.quantitySelector}>
                    <Pressable style={styles.roundButton} onPress={decreaseQ}>
                        <Text style={styles.symbol}>-</Text>
                    </Pressable>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <Pressable style={styles.roundButton} onPress={increaseQ}>
                        <Text style={styles.symbol}>+</Text>
                    </Pressable>

                    <View style={styles.buttonOutlineContainer}>
                        <Pressable style={[styles.button, styles.buttonOutline]} onPress={onModify}>
                            <Text style={styles.buttonOutlineText}>Modify</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.description}>
                    <Text>Garlic base sauce bread sticks topped with cheese blend and served with red sauce.</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable style={[styles.button, params.available === "true" ? styles.buttonAvailable : styles.buttonUnavailable]} onPress={addItem}>
                        <Text style={styles.buttonText}>Add to cart</Text>
                    </Pressable>
                </View>
                <Modifier isVisible={isModalVisible} onClose={onModalClose} itemCategory={params.category} itemId={params.id} modifiers={modifiers} />
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
        alignSelf: "center",
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonAvailable: {
        backgroundColor: "red",
    },
    buttonUnavailable: {
        backgroundColor: "rgba(255, 128, 128, 0.8)",
    },  
    buttonOutline: {
        backgroundColor: "white",
        borderColor: "red",
        borderWidth: 2,
    },
    buttonOutlineContainer: {
        width: '40%',
        alignSelf: "flex-end",
        marginLeft: 'auto',
        paddingRight: '5%'
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