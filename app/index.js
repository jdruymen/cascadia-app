import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function index() {
    return (
        <View style={styles.container}>
            <Link href={"/login"}>Go to login page</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});