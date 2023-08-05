import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import MenuItem from '../../../components/menuItem';
import { desserts } from '../../menuData';

export default function pizzaMenu() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Dessert pizzas</Text>
                </View>
                {desserts.map((dessert) => {
                    return (
                        <MenuItem img={dessert.img} label={dessert.name} price={dessert.price} id={dessert.id}  key={dessert.key} />
                    )
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
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