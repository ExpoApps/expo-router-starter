import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, View as DefaultView } from 'react-native';

import { View, Text } from '@/components/Themed';
import Card from '@/components/Card';
import { Stack } from "expo-router";
import { lightThemes, darkThemes } from '@/constants/Colors';
import { ColorTheme, useTheme } from '@/context/ThemeContext';

export default function SettingsScreen() {
    const { theme, colorTheme, setColorTheme } = useTheme();
    const themes = theme === 'light' ? lightThemes : darkThemes;

  return (
    <View style={{flex: 1}}>
      <Stack.Screen options={{ title: "Change color theme" }} />
        <Card>
            <Text>Selected: {colorTheme}</Text>
            {themes.map((theme, index) => (
                  <Pressable key={index} onPress={() => setColorTheme(theme.name as ColorTheme)}>
                  <DefaultView style={{flexDirection: 'row', alignItems: 'center'}}>
                  <DefaultView style={{width: 20, height: 20, backgroundColor: theme.colors.background, margin: 5 }} />
                      <Text>{theme.name}</Text>
                      </DefaultView>
                  </Pressable>
            ))}
        </Card>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
