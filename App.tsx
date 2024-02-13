import { StatusBar } from 'expo-status-bar';
import Profile from './src/screens/profile';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  console.log(fontsLoaded);
  return (
    <View>
      <Profile user={{name: "Kevin Wu", fact: "nature"}} />
    </View>
  );
}
