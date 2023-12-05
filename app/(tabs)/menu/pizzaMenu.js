import { StyleSheet, Text, View, Image, ScrollView, Pressable} from 'react-native';
import { ref, onValue } from "firebase/database";
import { database } from '../../../firebaseConfig';

import MenuItem from '../../../components/menuItem';
import { breadsticksImgs, redImgs, garlicImgs, bbqImgs } from '../../menuData';
import { useEffect, useState } from 'react';

export default function pizzaMenu() {
    const dbRef = ref(database);
    const [breadsticks, setBreadsticks] = useState([]);
    const [redPizzas, setRedPizzas] = useState([]);
    const [garlicPizzas, setGarlicPizzas] = useState([]);
    const [bbqPizzas, setBbqPizzas] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        onValue(ref(database, "menu/pizzas/breadsticks"), (snapshot) => {
            const data = snapshot.val();
            const pizzaData = Object.keys(data).map(key => ({
                key: key,
                id: key,
                img: breadsticksImgs.find((pizza) => pizza.key === key).img,
                name: data[key].name,
                price: data[key].price,
                available: data[key].available,
            }));
            setBreadsticks(pizzaData);
        });
        onValue(ref(database, "menu/pizzas/red_pizzas"), (snapshot) => {
            const data = snapshot.val();
            const pizzaData = Object.keys(data).map(key => ({
                key: key,
                id: key,
                img: redImgs.find((pizza) => pizza.key === key).img,
                name: data[key].name,
                price: data[key].price,
                available: data[key].available,
            }));
            setRedPizzas(pizzaData);
        });
        onValue(ref(database, "menu/pizzas/garlic_pizzas"), (snapshot) => {
            const data = snapshot.val();
            const pizzaData = Object.keys(data).map(key => ({
                key: key,
                id: key,
                img: garlicImgs.find((pizza) => pizza.key === key).img,
                name: data[key].name,
                price: data[key].price,
                available: data[key].available,
            }));
            setGarlicPizzas(pizzaData);
        });
        onValue(ref(database, "menu/pizzas/bbq_pizzas"), (snapshot) => {
            const data = snapshot.val();
            const pizzaData = Object.keys(data).map(key => ({
                key: key,
                id: key,
                img: bbqImgs.find((pizza) => pizza.key === key).img,
                name: data[key].name,
                price: data[key].price,
                available: data[key].available,
            }));
            setBbqPizzas(pizzaData);
        });
        setLoading(false);
    }, []);
    
    if(!isLoading) {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Wood Fired Breadsticks</Text>
                    </View>

                    {breadsticks.map((pizza) => {
                        return (
                            <MenuItem img={pizza.img} label={pizza.name} price={pizza.price} id={pizza.id} key={pizza.key} available={pizza.available} category={2} />
                        )
                    })}

                    <View style={styles.header}>
                        <Text style={styles.headerText}>Red Sauce Pizzas</Text>
                    </View>
                    
                    {redPizzas.map((pizza) => {
                        return (
                            <MenuItem img={pizza.img} label={pizza.name} price={pizza.price} id={pizza.id} key={pizza.key} available={pizza.available} category={2} />
                        )
                    })}

                    <View style={styles.header}>
                        <Text style={styles.headerText}>Garlic Pizzas</Text>
                    </View>
                    
                    {garlicPizzas.map((pizza) => {
                        return (
                            <MenuItem img={pizza.img} label={pizza.name} price={pizza.price} id={pizza.id} key={pizza.key} available={pizza.available} category={2} />
                        )
                    })}

                    <View style={styles.header}>
                        <Text style={styles.headerText}>BBQ Pizzas</Text>
                    </View>
                    
                    {bbqPizzas.map((pizza) => {
                        return (
                            <MenuItem img={pizza.img} label={pizza.name} price={pizza.price} id={pizza.id} key={pizza.key} available={pizza.available} category={2} />
                        )
                    })}

                </ScrollView>
            </View>
        );
    }
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