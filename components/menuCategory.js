import {StyleSheet, View, Pressable, Text, Image} from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";


export default function menuItem({ img, label, category }) {
    return (
        <Link href={{ 
            pathname: '../menu/[id]',
            params: { id: category }
            }} asChild>
            <Pressable style={styles.rowItem} android_ripple={{ borderless: false }}>
                <FontAwesome5 name={img} size={100} color={"black"} style={styles.image} />
                <Text style={styles.label}>{label}</Text>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    rowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#383838',
        paddingBottom: 5,
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 20,
    },
    label: {
        fontSize: 28,
        marginRight: 20,
        marginLeft: 10,
    },
});