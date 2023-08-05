import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import MenuItem from '../../../components/menuItem';
import { breadsticks, redPizzas, garlicPizzas, bbqPizzas } from '../../menuData';

export default function pizzaMenu() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Wood Fired Breadsticks</Text>
                </View>
                {breadsticks.map((pizza) => {
                    return (
                        <MenuItem img={pizza.img} label={pizza.name} price={pizza.price} id={pizza.id}  key={pizza.key} />
                    )
                })}

                <View style={styles.header}>
                    <Text style={styles.headerText}>Red Sauce Pizzas</Text>
                </View>
                {redPizzas.map((pizza) => {
                    return (
                        <MenuItem img={pizza.img} label={pizza.name} price={pizza.price} id={pizza.id} key={pizza.key} />
                    )
                })}

                <View style={styles.header}>
                    <Text style={styles.headerText}>Garlic Pizzas</Text>
                </View>
                {garlicPizzas.map((pizza) => {
                    return (
                        <MenuItem img={pizza.img} label={pizza.name} price={pizza.price} id={pizza.id} key={pizza.key} />
                    )
                })}

                <View style={styles.header}>
                    <Text style={styles.headerText}>BBQ Pizzas</Text>
                </View>
                {bbqPizzas.map((pizza) => {
                    return (
                        <MenuItem img={pizza.img} label={pizza.name} price={pizza.price} id={pizza.id} key={pizza.key} />
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