import React,{Component} from 'react';
import{
    View,
    Text,
    Linking
} from 'react-native';
import Styles from './CamNotAuthorized.styles';
import ActionButton from '../CustomActionButton/ActionButton';

const CamNotAuthorized = () =>{
    const gotoSetting = () =>{
        Linking.openSettings()
    }
    return (
        <View style = {Styles.permissionNotGrantedView}>
            <Text style = {Styles.camNotAuthorizedText}> Permission </Text>
            <ActionButton 
                buttonStyle={Styles.gotoSettingButton}
                onPress={gotoSetting}
                title={'gotoSetting'}
            />
        </View>
    )
}

export default CamNotAuthorized