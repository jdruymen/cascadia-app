import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../components/auth";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Accout() {
    const { setUser, user } = useAuth();
    
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Account</Text>
        <Text>{ user && user.name }</Text>
        <TouchableOpacity onPress={() => setUser(null)}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
});