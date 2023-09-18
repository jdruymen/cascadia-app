import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import MenuItem from '../../../components/menuItem';
import { sandwiches } from '../../menuData';

export default function pizzaMenu() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Sandwiches</Text>
                </View>
                {sandwiches.map((sandwich) => {
                    return (
                        <MenuItem img={sandwich.img} label={sandwich.name} price={sandwich.price} id={sandwich.id}  key={sandwich.key} />
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