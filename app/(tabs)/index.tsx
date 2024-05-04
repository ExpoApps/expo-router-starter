import { Link } from 'expo-router';

import { Text, View, Seperator } from '@/components/Themed';
import { styles } from '../_styles';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Seperator />

      <Link href="/modal">
        <Text>Go to Modal</Text>
      </Link>
    </View>
  );
}
