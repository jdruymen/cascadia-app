import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import MenuItem from '../../../components/menuItem';
import { salads } from '../../menuData';

export default function pizzaMenu() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Salads</Text>
                </View>
                {salads.map((salad) => {
                    return (
                        <MenuItem img={salad.img} label={salad.name} price={salad.price} id={salad.id}  key={salad.key} />
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