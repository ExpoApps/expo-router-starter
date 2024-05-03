import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { Text, View } from '@/components/Themed';
import Colors from '../constants/Colors';
import { styles } from './_styles';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor={Colors.lightColor} darkColor={Colors.darkColor} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
