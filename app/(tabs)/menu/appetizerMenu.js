import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import MenuItem from '../../../components/menuItem';
import { appetizers } from '../../menuData';

export default function pizzaMenu() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Appetizers and sharables</Text>
                </View>
                {appetizers.map((appetizer) => {
                    return (
                        <MenuItem img={appetizer.img} label={appetizer.name} price={appetizer.price} id={appetizer.id}  key={appetizer.key} />
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