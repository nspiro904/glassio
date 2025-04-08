import { Redirect } from 'expo-router';

// This is the entry point for your app
export default function Index() {
  // Redirect to the tabs navigator by default
  return <Redirect href="/(tabs)" />;
}