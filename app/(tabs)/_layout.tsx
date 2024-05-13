import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, Link } from 'expo-router';

import { useClientOnlyValue } from '@/utils/useClientOnlyValue';
import { useTheme } from '@/context/ThemeContext';
import { useColors } from '@/constants/Colors';
import { Text } from '@/components/Themed';
import { Pressable } from 'react-native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { theme, setTheme } = useTheme();
  const colors = useColors();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const Title = <Text style={{
    fontWeight: 'bold',
    color: colors.brand,
  }}>
    App Title
  </Text>

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.brand,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: { 
          backgroundColor: colors.surface,
          //remove shadow:
          shadowColor: 'transparent',
          elevation: 0, // for Android
          shadowOpacity: 0, // for iOS
          borderTopWidth: 0, // for web
         },
        headerStyle: { 
          backgroundColor: colors.surface,
          borderBottomColor: colors.gray,
          borderBottomWidth: 1
         },
        headerTitleStyle: { color: colors.text },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        headerRight: () => (
          <Pressable> 
            {({ pressed }) => (
              <Link href="/settings">
                <FontAwesome
                  name='cog'
                  size={25}
                  color={colors.text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              </Link>
            )}
          </Pressable>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => <>{Title}</>,
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          headerTitle: () => <>{Title}</>,
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
    </Tabs>
  );
}
