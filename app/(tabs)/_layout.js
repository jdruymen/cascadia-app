import React from 'react';
import { Tabs } from "expo-router";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Pressable, useColorScheme } from 'react-native';

import Colors from '../../components/Colors';
import { Link } from '../modal';

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
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({ pressed }) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme || 'dark'].text}
                                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }} 
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="user" size={24} color={color} />
                    ),
                    title: "Profile",
                }}
            />
        </Tabs>
    );
};