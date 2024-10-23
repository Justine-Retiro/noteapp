import React, { useEffect, useState } from 'react';
import { Splash } from './Splash';
import Boot from './Boot';
import Main from './Main';
import { registerForPushNotificationsAsync, setupNotifications, loadUserData } from './utils/userDataManager';

export default function App() {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedToday, setIsLoggedToday] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      // Register for push notifications
      await registerForPushNotificationsAsync();

      // Set up notification handlers
      setupNotifications();

      // Load user data
      const userData = await loadUserData();
      if (userData) {
        const now = new Date();
        const lastLoggedDate = new Date(userData.moodTimestamp || 0);
        const isSameDay = now.toDateString() === lastLoggedDate.toDateString();

        setIsFirstTime(userData.reminders.length === 0 && userData.notes.length === 0);
        setIsLoggedToday(isSameDay);
      }

      setIsLoading(false);
    };

    initializeApp();
  }, []);

  if (isLoading) {
    return null; // or a loading spinner
  }

  if (isFirstTime) {
    return <Splash />;
  }

  if (!isLoggedToday) {
    return <Boot />;
  }

  return <Main />;
}