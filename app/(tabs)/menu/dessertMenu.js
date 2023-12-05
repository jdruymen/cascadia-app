import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useEffect, useState } from "react";
import { onValue, ref } from 'firebase/database';

import { database } from "../../../firebaseConfig";
import MenuItem from '../../../components/menuItem';
import { dessertImgs } from '../../menuData';

export default function dessertMenu() {
    const [desserts, setDesserts] = useState([]);

    useEffect(() => {
        onValue(ref(database, "menu/desserts"), (snapshot) => {
            const data = snapshot.val();
            const dessertData = Object.keys(data).map(key => ({
                key: key,
                id: key,
                img: dessertImgs.find((dessert) => dessert.key === key).img,
                name: data[key].name,
                price: data[key].price,
                available: data[key].available,
            }));
            setDesserts(dessertData);
        });
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Desserts</Text>
                </View>
                {desserts.map((dessert) => {
                    return (
                        <MenuItem img={dessert.img} label={dessert.name} price={dessert.price} id={dessert.id}  key={dessert.key} available={dessert.available} category={4} />
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