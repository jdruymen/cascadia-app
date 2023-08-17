import { Stack } from "expo-router";

export default () => {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)/signUp" options={{ headerShown: true, headerTitle: ""}} />
            <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        </Stack>
    );
};