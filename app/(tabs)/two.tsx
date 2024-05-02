import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { styles } from '../_styles';
import Colors from '../../constants/Colors';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor={Colors.lightColor} darkColor={Colors.darkColor} />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
