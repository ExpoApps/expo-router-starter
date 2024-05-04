import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { Text, View, Seperator } from '@/components/Themed';
import { styles } from './_styles';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <Seperator />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
