import {StyleSheet, View, Pressable, Text, Image} from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome5 } from "@expo/vector-icons";

export default function menuItem({ img, label, price, id, available, category }) {
    return (
        <Link href={{ pathname: '../menu/item', params: { id: id, img: img, label: label, price: price, available: available, category: category }}} asChild>
            
            <Pressable style={styles.rowItem} android_ripple={{ borderless: false }}>
                <Image source={img} style={styles.image} />
                <Text style={styles.label}>{label}</Text>
                <View style={styles.endContainer}>
                    <Text style={styles.price}>${price}</Text>
                    <FontAwesome5 name="caret-right" style={styles.icon} />
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    rowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#383838',
        paddingBottom: 5,
    },
    image: {
        width: 80,
        height: 80,
        marginLeft: 25,
    },
    label: {
        fontSize: 22,
        marginRight: 20,
        marginLeft: 10,
    },
    price: {
        fontSize: 20,
        paddingRight: 10,
    },
    icon: {
        fontSize: 25,
    },
    endContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 25,
    }
});