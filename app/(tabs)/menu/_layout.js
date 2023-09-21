import { Stack } from "expo-router";

export default () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="pizzaMenu" options={{ headerTitle: "Wood Fired Pizzas" }} />
            <Stack.Screen name="appetizerMenu" options={{ headerTitle: "Appetizers & Sharables" }} />
            <Stack.Screen name="saladMenu" options={{ headerTitle: "Salads" }} />
            <Stack.Screen name="sandwichMenu" options={{ headerTitle: "Sandwiches" }} />
            <Stack.Screen name="dessertMenu" options={{ headerTitle: "Desserts" }} />
        </Stack>
    );
};