import { View, Button, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

//Im ganzen Code vereinzelte Teile (Zeilen 7,8, 17,18, 23-46)

export default function Home() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
          <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.header}>QR-Code Scanner</Text>
            <Button title='Scan' onPress={() => navigation.navigate('Scanner')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#525E75',
      color: '#F9F3CC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      position: 'absolute',
      top: 20,
      left: 20, 
      width: 100, 
      height: 100, 
    },
    header: {
      padding: 60,
      fontSize:30,
      padding: '10%',
      color: '#F9F3CC',
    },
    Button: {
    },
  });
