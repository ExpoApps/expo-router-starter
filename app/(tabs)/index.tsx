import { Link } from 'expo-router';

import { Text, View } from '@/components/Themed';
import { styles } from '../_styles';
import Colors from '../../constants/Colors';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor={Colors.lightColor} darkColor={Colors.darkColor} />

      <Link href="/modal">
        <Text>Go to Modal</Text>
      </Link>
    </View>
  );
}
