import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useEffect, useState } from "react";
import { onValue, ref } from 'firebase/database';

import { database } from "../../../firebaseConfig";
import MenuItem from '../../../components/menuItem';
import { sandwichImgs } from '../../menuData';

export default function sandwichMenu() {
    const [sandwiches, setSandwiches] = useState([]);

    useEffect(() => {
        onValue(ref(database, "menu/sandwiches"), (snapshot) => {
            const data = snapshot.val();
            const sandwichData = Object.keys(data).map(key => ({
                key: key,
                id: key,
                img: sandwichImgs.find((sandwich) => sandwich.key === key).img,
                name: data[key].name,
                price: data[key].price,
                available: data[key].available,
            }));
            setSandwiches(sandwichData);
        });
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Sandwiches</Text>
                </View>
                {sandwiches.map((sandwich) => {
                    return (
                        <MenuItem img={sandwich.img} label={sandwich.name} price={sandwich.price} id={sandwich.id}  key={sandwich.key} available={sandwich.available} category={3} />
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