import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import Styles from './styles'
import AsyncStorage from '@react-native-community/async-storage';

const Splash = (props) => {
    useEffect(() => {
        setTimeout(async () => {
            let token = await AsyncStorage.getItem('token', null);
            console.log(token)
            if (token) {
                props.navigation.navigate('App')
            } else {
                props.navigation.navigate('Login')
            }

        }, 3000);
    });
    return (
        <View style={Styles.container}>
            <Text style={Styles.brandText}>Remitbee</Text>
        </View>
    )
}


export default Splash