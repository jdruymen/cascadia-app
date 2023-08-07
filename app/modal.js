import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Link({ href, asChild, children }) {
    const navigation = useNavigation();

    const handlePress = () => {
        // Handle navigation to the modal screen
        if (asChild) {
            navigation.navigate('Modal');
        } else {
            // Handle other navigation logic here
        }
    };

    if (asChild) {
        return <Pressable onPress={handlePress}>{children}</Pressable>;
    }

    return (
        <a href={href} onClick={handlePress}>
            {children}
        </a>
    );
}

export function ModalScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is a modal screen!</Text>
        </View>
    );
}
