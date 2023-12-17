import { StyleSheet, View, Text, Pressable, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { Modal } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useState } from "react";
import ModSelection from "./modSelection";
import { database } from "../firebaseConfig";
import { useEffect } from "react";
import { ref, onValue } from "firebase/database";

export default function Modifier({ isVisible, onClose, itemCategory, itemId, modifiers }) {
    const [notes, setNotes] = useState('');
    const [pizzaRemoval, setPizzaRemoval] = useState([]);
    const [pizzaMods, setPizzaMods] = useState([]);
    const selectedMods = new Set(modifiers);

    if (itemCategory == "2") {
        useEffect(() => {
            onValue(ref(database, "modifiers/pizzas/" + itemId), (snapshot) => {
                const modData = snapshot.val();
                modData.shift();
                setPizzaRemoval(modData);
            });
            onValue(ref(database, "modifiers/pizzas/all_mods"), (snapshot) => {
                const data = snapshot.val();
                const modData = Object.keys(data).map(key => ({
                    mod : data[key].mod,
                    price : data[key].price,
                }));
                setPizzaMods(modData);
            });
        }, []);
    }

    const onSelect = (mod) => {
        if (selectedMods.has(mod)) {
            selectedMods.delete(mod)
        }

        else {
            selectedMods.add(mod)
        }
    }
    
    function closeModal () {
        if (notes != "") {
            selectedMods.add(notes)
        }

        onClose(selectedMods)
    }

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible} statusBarTranslucent>
            <View style={styles.container}>
                    <View style={styles.modalContent}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Modify your item</Text>
                            <Pressable onPress={closeModal}>
                                <MaterialIcons name="close" color="#fff" size={22} />
                            </Pressable>
                        </View>

                        <ScrollView>
                            <KeyboardAvoidingView style={styles.inputContainer} behavior="position" keyboardVerticalOffset={-30} >

                                {itemCategory == 1 && (
                                    <ModSelection mod="Add chicken" price="1.50" />
                                )}

                                {itemCategory == 2 && (
                                    <View>
                                        <Text style={styles.header}>Crust</Text>
                                        <ModSelection mod="Extra Crispy" onSelect={onSelect} modList={selectedMods} />
                                        <ModSelection mod="Kids cut (8 slices)" onSelect={onSelect} modList={selectedMods} />
                                        <ModSelection mod="Gluten free" price="4.00" onSelect={onSelect} modList={selectedMods} />
                                        <ModSelection mod="Garlic oil crust" price="1.00" onSelect={onSelect} modList={selectedMods} />
                                        
                                        <Text style={styles.header}>Base sauce</Text>
                                        <ModSelection mod="No base sauce" onSelect={onSelect} modList={selectedMods} />
                                        <ModSelection mod="Red sauce base" onSelect={onSelect} modList={selectedMods} />
                                        <ModSelection mod="Garlic sauce base" onSelect={onSelect} modList={selectedMods} />
                                        <ModSelection mod="BBQ sauce base" onSelect={onSelect} modList={selectedMods} />

                                        <Text style={styles.header}>Remove toppings</Text>
                                        {pizzaRemoval.map((mods, i) => {
                                            return (
                                                <ModSelection key={i} mod={mods} onSelect={onSelect} modList={selectedMods} /> 
                                            )
                                        })}

                                        <Text style={styles.header}>Add toppings</Text>
                                        {pizzaMods.map((mods, i) => {
                                            return (
                                                <ModSelection key={i} mod={mods.mod} price={mods.price} onSelect={onSelect} modList={selectedMods} />
                                            )
                                        })}


                                        <Text style={styles.header}>Add a side sauce</Text>
                                        <ModSelection mod="Ranch side" price="0.50" onSelect={onSelect} modList={selectedMods} />
                                        <ModSelection mod="Red sauce side" price="0.50" onSelect={onSelect} modList={selectedMods} />
                                        <ModSelection mod="BBQ side" price="0.50" onSelect={onSelect} modList={selectedMods} />
                                        <ModSelection mod="Spicy BBQ side" price="0.50" onSelect={onSelect} modList={selectedMods} />
                                        <ModSelection mod="Buffalo side" price="0.50" onSelect={onSelect} modList={selectedMods} />
                                        

                                    </View>
                                )}
                            
                                <Text style={styles.notesHeader}>Special notes? Let us know here.</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={setNotes}
                                    value={notes}
                                    placeholder="Enter notes"
                                    maxLength={55}
                                />
                                <View style={{ flex: 1 }} />
                            </KeyboardAvoidingView>
                        </ScrollView>
                    </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex: 1,
    },
    modalContent: {
        height: '90%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0,
        justifyContent: "flex-end",
        flex: 1,
    },
    titleContainer: {
        height: '8%',
        backgroundColor: 'red',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        color: "#fff",
        fontSize: 16,
    },
    header: {
        fontSize: 16,
        fontWeight: '500',
        margin: 12,
        marginBottom: 0,
    },
    notesHeader: {
        fontSize: 14,
        margin: 12,
        marginBottom: 0,
    },
    input: {
        padding: 10,
        fontSize: 14,
        borderWidth: 1,
        margin: 12,
    },
    inputContainer: {
        flex: 1
    }
});