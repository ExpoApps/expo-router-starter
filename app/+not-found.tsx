import { Link, Stack } from 'expo-router';

import { Text, View } from '@/components/Themed';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={{flex: 1}}>
        <Text>This screen doesn't exist.</Text>

        <Link href="/">
          <Text style={{color: '#2e78b7'}}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
