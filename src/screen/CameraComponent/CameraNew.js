import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Styles from './Camera.component.styles';
import { RNCamera } from 'react-native-camera';
import CamNotAuthorized from '../../UIElements/CamNotAuthorized/CamNotAuthorized';
import navigationServices from '../../navigator/navigationServices';

export default class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isLoading: false,
            errormsg: '',
            errorTitle: '',
            isPermitted: false,
            event: {}
        }
    }

    gotoHome = () => {
        // take user to home screen and reset previous stack
        navigationServices.navigate('App')
    }

    redirectToPreview = (imageURI) => {
        navigationServices.navigate('HomeScreen', { imageURI })
    }

    onBottomButtonPressed = async (event) => {
        // if(event.type === 'left'){
        //     console.log("left button pressed!");
        //     this.props.navigation.setParams({showHeaderButton:true});
        //     this.gotoHome();
        // }
        // else if (event.type === 'capture'){
        //     console.log(JSON.stringify(event));
        //     this.setState({event:event},()=>this.redirectToPreview())
        // }
        if (this.camera) {
            const options = { quality: 0.7 };
            const data = await this.camera.takePictureAsync(options);
            this.redirectToPreview(data.uri);
        }
    }

    render() {
        return (

            <View style={Styles.container}>
                <RNCamera
                    ref={(ref) => {
                        this.camera = ref;
                    }}
                    style={Styles.preview}
                    type={RNCamera.Constants.Type.back}
                    notAuthorizedView={<CamNotAuthorized />}
                    captureAudio={false}
                    flashMode={RNCamera.Constants.FlashMode.auto} />
                <View style={Styles.captureButton}>
                    <TouchableOpacity onPress={this.onBottomButtonPressed.bind(this)} style={Styles.capture}>
                        <Text style={Styles.captureText}> click </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}