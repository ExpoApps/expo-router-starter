import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable } from 'react-native';

import { View, Text } from '@/components/Themed';
import Card from '@/components/Card';
import { Stack } from "expo-router";
import { lightThemes } from '@/constants/Colors';
import { ColorTheme, useTheme } from '@/context/ThemeContext';

export default function SettingsScreen() {
    const { colorTheme, setColorTheme } = useTheme();
  return (
    <View style={{flex: 1}}>
      <Stack.Screen options={{ title: "Change color theme" }} />
        <Card>
            <Text>Selected: {colorTheme}</Text>
            {lightThemes.map((theme, index) => (
                <React.Fragment key={index}>
                    <Pressable onPress={() => setColorTheme(theme.name as ColorTheme)}>
                        <Text>{theme.name}</Text>
                    </Pressable>
                </React.Fragment>
            ))}
        </Card>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
