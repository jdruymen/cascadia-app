import { Stack } from "expo-router";

export default () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="pizzaMenu" options={{ headerShown: false }} />
            <Stack.Screen name="appetizerMenu" options={{ headerShown: false }} />
            <Stack.Screen name="saladMenu" options={{ headerShown: false }} />
            <Stack.Screen name="sandwichMenu" options={{ headerShown: false }} />
            <Stack.Screen name="dessertMenu" options={{ headerShown: false }} />
        </Stack>
    );
};