import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {  AccessToken, LoginManager,  GraphRequest,GraphRequestManager, } from 'react-native-fbsdk-next';
import Styles from './Styles'
import AsyncStorage from '@react-native-community/async-storage';
import navigationServices from '../../navigator/navigationServices';


export default class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.loginWithFB= this.loginWithFB.bind(this);
    }

    loginWithFB= ()=>{
        var self = this;
        console.log('Enter')
        LoginManager.logInWithPermissions(['public_profile','email']).then(
            function(result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        async (data) => {

                            await AsyncStorage.setItem('token', JSON.stringify(data.accessToken));
                           if(data.accessToken){
                               const token = data.accessToken
                            const PROFILE_REQUEST_PARAMS = {
                                fields: {
                                  string: 'id, name,  first_name, last_name, picture',
                                },
                              };
                              const profileRequest = new GraphRequest(
                                '/me',
                                {token, parameters: PROFILE_REQUEST_PARAMS},
                                async(error, result) => {
                                  if (error) {
                                    console.log('login info has error: ' + error);
                                  } else {
                                  //   this.setState({userInfo: result});
                                      await AsyncStorage.setItem('user',JSON.stringify(result))
                                     navigationServices.navigate('App')
                                    console.log('result:', result);
                                  }
                                },
                              );
                              new GraphRequestManager().addRequest(profileRequest).start();
                           }
                            console.log('AccessToken', data)
                        }
                    )
                }
            },
            function(error) {
              console.log("Login fail with error: " + error);
            }
        )
    }

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.brandText}>Remitbee</Text>
        <TouchableOpacity style={Styles.fbLoginContainer} onPress={this.loginWithFB}>
            <Text style={{color: 'white'}}> FaceBook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}