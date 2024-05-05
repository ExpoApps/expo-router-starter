import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useTheme } from '@/context/ThemeContext';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : theme === 'light' ? 'green' : 'dark');
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[theme ?? 'light'].tabIconSelected,
        tabBarInactiveTintColor: Colors[theme ?? 'light'].tabIconDefault,
        tabBarStyle: { backgroundColor: Colors[theme].tabBgColor },
        headerStyle: { backgroundColor: Colors[theme].headerBgColor },
        headerTitleStyle: { color: Colors[theme].text },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerRight: () => (
          <Pressable onPress={toggleTheme}>
            {({ pressed }) => (
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[theme ?? 'light'].text}
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
