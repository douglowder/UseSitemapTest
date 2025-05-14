import { Stack } from 'expo-router';

export default function ThirdLevel() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="two" />
    </Stack>
  );
}
