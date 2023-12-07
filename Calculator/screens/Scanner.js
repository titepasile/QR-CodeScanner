import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, Linking } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false); 

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted'); 
        })(); 
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned`)
    };

    return(
        <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
    )

    //Permission
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8EACCD',
      color: '#F9F3CC',
      fontFamily: 'sans-serif',
      alignItems: 'center',
      justifyContent: 'center',
    },
});