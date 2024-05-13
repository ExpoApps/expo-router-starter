import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { View, Text } from '@/components/Themed';
import Card from '@/components/Card';
import { Stack, Link } from "expo-router";

export default function SettingsScreen() {
  return (
    <View style={{flex: 1}}>
      <Stack.Screen options={{ title: "Settings" }} />
      <Card>
        <Link href="/settings/colors">
          <Text>Color theme</Text>
        </Link>
      </Card>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
