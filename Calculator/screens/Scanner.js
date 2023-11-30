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
        alert(`Bar code with type ${type} and data ${Linking.openURL(`${data}`)} has been scanned`)
    };

    //Permission
}