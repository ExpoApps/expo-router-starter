import { Seperator, Text, View } from '@/components/Themed';
import { styles } from '../_styles';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Seperator />
    </View>
  );
}
