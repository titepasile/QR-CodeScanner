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
      backgroundColor: '#525E75',
      color: '#F9F3CC',
      fontFamily: 'sans-serif',
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      padding: '60px',
      fontFamily: 'cursive',
<<<<<<< Updated upstream
      color: '#F9F3CC',
    },
    Button: {
      borderRadius: '50px',
      backgroundColor: 'blue',
=======
      color: '#F1DDBF',
    },
    Button: {
      borderRadius: '50px',
      backgroundColor: '#DAE5D0',
      color: '#DAE5D0',
>>>>>>> Stashed changes
    },
  });