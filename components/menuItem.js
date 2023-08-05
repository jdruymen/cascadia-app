import {StyleSheet, View, Pressable, Text, Image} from 'react-native';
import { Link } from 'expo-router';

export default function menuItem({ img, label, price, id }) {
    return (
        <Link href={{ pathname: '../menu/item', params: { id: id, img: img, label: label, price: price }}} asChild>
            <Pressable style={styles.rowItem} android_ripple={{ borderless: false }}>
                <Image source={img} style={styles.image} />
                <Text style={styles.label}>{label}</Text>
                <View style={styles.endContainer}>
                    <Text style={styles.price}>{price}</Text>
                    <Text>{">"}</Text>
                </View>
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
    },
    endContainer: {
        justifyContent: 'flex-end',
    }
});