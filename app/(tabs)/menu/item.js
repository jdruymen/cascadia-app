import { StyleSheet, Text, View, Image } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function index() {
    const params = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Image uri={params.img} style={styles.image} />
            <Text>{params.label}</Text>
            <Text>{params.price}</Text>
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
        maxWidth: "70%",
    },
});