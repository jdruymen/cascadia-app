import { StyleSheet, View, Text, Pressable } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function ModSelection({ mod, price, onSelect, modList }) {
    const modSet = new Set(modList)
    const [toggleCheckbox, setToggleCheckbox] = useState(modSet.has(mod));

    function toggle() {
        setToggleCheckbox(!toggleCheckbox);
        onSelect(mod);
    };

    return (
        <Pressable style={styles.container} onPress={toggle}> 
            <View style={styles.leftContainer}>
                <Checkbox disabled={false} value={toggleCheckbox} onValueChange={toggle} />
                <Text style={styles.label}>{mod}</Text>
            </View>
            
            {price && <Text style={styles.price}>+${price}</Text>}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: "row",
        padding: 10,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
    },
    leftContainer: {
        flexDirection: "row"
    },
    label: {
        fontSize: 14,
        marginLeft: 10,
    },
    price: {
        fontSize: 11,
        color: "gray",
    }
});