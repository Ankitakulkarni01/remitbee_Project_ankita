import React from 'react';
import{
    View,
    TouchableOpacity,
    Text
} from 'react-native';
// import Styles from './ActionButton.styles';
// import { Button } from 'react-native-elements';

const ActionButton = (props) =>{
    return(
    <View  style={Styles.btnContainer}>
            {/* <Button
                buttonStyle={props.buttonStyle}
                onPress={props.onPress}
                title={props.title}
                icon = {props.icon ? props.icon : null}
                type="solid"/> */}
            <TouchableOpacity 
                style={props.buttonStyle} 
                onPress={props.onPress}
                disabled={props.disabled ? props.disabled : false}>
                {/* <Loader loading={this.state.isLoading}/> */}
                {props.icon ? props.icon : null}
                <Text style={props.btnTextStyle ? props.btnTextStyle : Styles.btnText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = {
    btnContainer: {
        backgroundColor: 'black',
        height: 50,
        margin: '5%', 
        justifyContent: 'center', 
        alignItems: 'center',
    }
}

export default ActionButton;