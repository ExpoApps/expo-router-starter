import { StatusBar } from 'expo-status-bar';
import { Platform, Switch, View as DefaultView } from 'react-native';

import { View, Text } from '@/components/Themed';
import Card from '@/components/Card';
import { Stack, Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColors } from '@/constants/Colors';
import { useTheme } from '@/context/ThemeContext';

export default function SettingsScreen() {
  const colors = useColors();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <View style={{flex: 1}}>
      <Stack.Screen options={{ title: "Settings" }} />
      <Card>
        <DefaultView style={{flexDirection: 'row', justifyContent: 'space-between'}} >
          <Text>Dark mode</Text>
          <Switch
            onValueChange={toggleTheme}
            value={theme === 'dark'}
          />
        </DefaultView>
        <DefaultView  style={{flexDirection: 'row', justifyContent: 'space-between'}} >
          <Link href="/settings/colors">
            <Text>Color theme</Text>
          </Link>
          <FontAwesome
            name='paint-brush'
            size={20}
            color={colors.text}
          />
        </DefaultView>
      </Card>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
