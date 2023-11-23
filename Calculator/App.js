import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <header style={styles.header}>QR-Code Scanner</header>
      <Text>Here is our super QR-Code Scanner.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8EACCD',
    color: '#F9F3CC',
    fontFamily: 'sans-serif',
    alignItems: 'center',
  },
  header: {
    fontSize: '3rem',
    padding: '60px',
    fontFamily: 'cursive',
  },
});
