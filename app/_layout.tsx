import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import this
import { Splash } from './Splash';
import { Boot } from './Boot';
import { Main } from './Main';

import { useColorScheme } from '@/hooks/useColorScheme';
import { loadUserData } from './utils/userDataManager';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const checkRegistration = async () => {
      const userData = await loadUserData();
      setIsRegistered(!!userData?.userName);
    };

    checkRegistration();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="Splash" options={{ headerShown: false }} />
          <Stack.Screen name="Boot" options={{ headerShown: false }} />
          <Stack.Screen name="Main" options={{ headerShown: false }} />
          <Stack.Screen name="NoteAdd" options={{ headerShown: false }} />
          <Stack.Screen name="ReminderAdd" options={{ headerShown: false }} />
          <Stack.Screen name="NoteDetail" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}