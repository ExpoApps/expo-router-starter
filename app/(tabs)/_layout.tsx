import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import { useClientOnlyValue } from '@/utils/useClientOnlyValue';
import { useTheme } from '@/context/ThemeContext';
import { useColors } from '@/constants/Colors';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name'];
  color: string;
}) {
  return <Feather size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { theme, setTheme } = useTheme();
  const colors = useColors();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.selected,
        tabBarInactiveTintColor: colors.brand,
        tabBarStyle: { backgroundColor: colors.surface },
        headerStyle: { backgroundColor: colors.header },
        headerTitleStyle: { color: colors.text },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerRight: () => (
          <Pressable onPress={toggleTheme}> 
            {({ pressed }) => (
              <Feather
                name={theme === 'dark' ? 'sun' : 'moon'}
                size={25}
                color={colors.text}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Calendar',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="inbox" color={color} />,
        }}
      />
    </Tabs>
  );
}
