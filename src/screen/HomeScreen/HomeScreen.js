import React from 'react'
import { View, Text, Image } from 'react-native'
import Styles from './styles'
import ActionButton from '../../UIElements/CustomActionButton/ActionButton';
import { useRoute } from '@react-navigation/core';
import CreditCard from './CreditCrad'

const Home = (props) => {
    let route = useRoute()

    return (
        <View style={Styles.container}>
            <Text style={Styles.brandText}>Remitbee</Text>
            {
                route.params
                    ?
                    <View style={Styles.parentContainer}>
                    <View style={Styles.imageContainer}>
                        <Image style={Styles.image}
                            resizeMode="stretch"
                            source={{ uri: route.params.imageURI }} />
                        </View>
                        <CreditCard />
                    </View>
                    : <ActionButton
                        buttonStyle={Styles.exploreButton}
                        style={{flex:1,color: 'white'}}
                        btnTextStyle={{color:"white"}}
                        onPress={() => props.navigation.navigate('CameraScreen')}
                        title={'Open Camera'}
                    />
            }
        </View>
    )
}


export default Home