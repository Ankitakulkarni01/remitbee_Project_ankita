import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    cameraKit:{
        flex: 1,
        backgroundColor: 'white'
    },
    cameraKitContainer:{
        flex: 10,
        flexDirection: 'column'
    },
    gap:{
        flex: 10, 
        flexDirection: 'column'
    },
    cameraComponentStack:{ 
        flex: 1, 
        backgroundColor: 'transparent' 
    },
    openCameraTextContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    openCameraButton:{
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    captureButton:{
          flex: 0,
          flexDirection: 'row',
          justifyContent: 'center' 
    },
    captureText:{
          fontSize:15,
          color:'black'
    }
})

export default styles;