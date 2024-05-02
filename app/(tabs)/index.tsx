import { Link } from 'expo-router';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { styles } from '../_styles';
import Colors from '../../constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor={Colors.lightColor} darkColor={Colors.darkColor} />
      <EditScreenInfo path="app/(tabs)/index.tsx" />

      <Link href="/modal">
        <Text>Go to Modal</Text>
      </Link>
    </View>
  );
}
