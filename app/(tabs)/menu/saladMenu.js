import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useEffect, useState } from "react";
import { onValue, ref } from 'firebase/database';

import { database } from "../../../firebaseConfig";
import MenuItem from '../../../components/menuItem';
import { saladImgs } from '../../menuData';

export default function saladMenu() {
    const [salads, setSalads] = useState([]);

    useEffect(() => {
        onValue(ref(database, "menu/salads"), (snapshot) => {
            const data = snapshot.val();
            const saladData = Object.keys(data).map(key => ({
                key: key,
                id: key,
                img: saladImgs.find((salad) => salad.key === key).img,
                name: data[key].name,
                price: data[key].price,
                available: data[key].available,
            }));
            setSalads(saladData);
        });
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Salads</Text>
                </View>
                {salads.map((salad) => {
                    return (
                        <MenuItem img={salad.img} label={salad.name} price={salad.price} id={salad.id}  key={salad.key} available={salad.available} category={1} />
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: 'red',
        marginBottom: 15,
        paddingLeft: 12,
        borderColor: '#383838',
        borderBottomWidth: 2,
        borderTopWidth: 1,
    },
    headerText: {
        color: '#fff',
        fontSize: 30,
    },
});