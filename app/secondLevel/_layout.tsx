import { Stack } from 'expo-router';

export default function SecondLevel() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="two" />
      <Stack.Screen name="thirdLevel" />
    </Stack>
  );
}
