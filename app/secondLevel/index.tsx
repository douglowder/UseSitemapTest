import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { Pressable } from 'react-native';

export default function Index() {
  const router = useRouter();
  return (
    <ThemedView>
      <ThemedText>Second level index</ThemedText>
      <Pressable onPress={() => router.push('/secondLevel/two')}>
        <ThemedText type="link">Second level screen 2</ThemedText>
      </Pressable>
      <Pressable onPress={() => router.push('/secondLevel/thirdLevel')}>
        <ThemedText type="link">Third level</ThemedText>
      </Pressable>
    </ThemedView>
  );
}
