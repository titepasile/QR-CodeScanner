import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

const handleScan = () => {
  // Hier die QR-Code-Scan Logik
};

export default function App() {
  //const. etc.
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  //Programmlogik mit dem QR-Code Scannen

  return (
    <View style={styles.container}>
      <header style={styles.header}>QR-Code Scanner</header>
      <Text>Here is our super QR-Code Scanner.</Text>
      <StatusBar style="auto" />
      <Button title="Scannen" onPress={handleScan} />
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
  Button: {
    borderRadius: '50px',
    backgroundColor: 'blue',
  },
});

// export default App;