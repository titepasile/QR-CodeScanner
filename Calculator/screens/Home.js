import { View, Button, StyleSheet, Text } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.header}>QR-Code Scanner</Text>
            <Button title='Scan' onPress={()=> navigation.navigate('Scanner')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8EACCD',
      color: '#F9F3CC',
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      kamera-dddd
      padding: 60,
      fontSize:30,
      padding: '10%',
      main
      fontFamily: 'cursive',
      color: '#CDC2AE',
    },
    Button: {
    },
  });