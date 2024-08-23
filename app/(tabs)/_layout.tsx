import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'home'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: 'Details',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'bookmark'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mylist"
        options={{
          title: 'MyList',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={'search'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
