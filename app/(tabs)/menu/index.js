import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import MenuCategory from '../../../components/menuCategory';


export default function index() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <MenuCategory img={"pizza-slice"} label={"Wood Fired Pizzas"} category={"pizzaMenu"} />
                <MenuCategory img={"pizza-slice"} label={"Appetizers"} category={"appetizerMenu"} />
                <MenuCategory img={"pizza-slice"} label={"Salads"} category={"saladMenu"} />
                <MenuCategory img={"pizza-slice"} label={"Sandwiches"} category={"sandwichMenu"} />
                <MenuCategory img={"pizza-slice"} label={"Desserts"} category={"dessertMenu"} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});