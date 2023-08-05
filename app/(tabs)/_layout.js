import { Tabs } from "expo-router";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="menu"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="pizza-slice" size={24} color={color} />
                    ),
                    title: "Order",
                }} 
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                    title: "Profile",
                }}
            />
        </Tabs>
    );
};