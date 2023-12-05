import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useEffect, useState } from "react";
import { onValue, ref } from 'firebase/database';

import { database } from "../../../firebaseConfig";
import MenuItem from '../../../components/menuItem';
import { appetizerImgs } from '../../menuData';

export default function appetizerMenu() {
    const [appetizers, setAppetizers] = useState([]);

    useEffect(() => {
        onValue(ref(database, "menu/appetizers"), (snapshot) => {
            const data = snapshot.val();
            const appetizerData = Object.keys(data).map(key => ({
                key: key,
                id: key,
                img: appetizerImgs.find((appetizer) => appetizer.key === key).img,
                name: data[key].name,
                price: data[key].price,
                available: data[key].available,
            }));
            setAppetizers(appetizerData);
        });
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Appetizers and sharables</Text>
                </View>
                {appetizers.map((appetizer) => {
                    return (
                        <MenuItem img={appetizer.img} label={appetizer.name} price={appetizer.price} id={appetizer.id}  key={appetizer.key} available={appetizer.available} category={0}/>
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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