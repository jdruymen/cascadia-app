import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function index() {
    return (
        <View style={styles.container}>
            <Link href={"/signUp"}>Go to sign-up page</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
});