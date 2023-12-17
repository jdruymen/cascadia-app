import React from 'react';
import { Tabs } from "expo-router";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../components/Colors';

function TabBarIcon(props) {
    return React.createElement(FontAwesome5, { size: 28, style: { marginBottom: -3 }, ...props });
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme || 'light'].tint,
            }}>
            <Tabs.Screen
                name="menu"
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="pizza-slice" size={24} color={color} />
                    ),
                    title: "Order",
                    headerShown: false,
                }} 
            />
            <Tabs.Screen 
                name="map"
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="map" size={24} color={color} />
                    ),
                    title: "Map",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="calendar"
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="calendar" size={24} color={color} />
                    ),
                    title: "Calendar",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="user" size={24} color={color} />
                    ),
                    title: "Profile",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="shopping-cart" size={24} color={color} />
                    ),
                    title: "Cart",
                    headerShown: false,
                }}
            />
        </Tabs>
    );
};