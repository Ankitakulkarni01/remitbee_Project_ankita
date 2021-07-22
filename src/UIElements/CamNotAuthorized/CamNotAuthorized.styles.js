import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    camNotAuthorizedText:{
        alignItems: 'center',
        alignSelf:'center',
        textAlign:'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        marginBottom: '3%'
    },
    permissionNotGrantedView:{
        flex:1,
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent:'center',
    },
    gotoSettingButton:{
        flex:1,
        height: 50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'stretch',
        borderRadius:5,
        marginHorizontal: '5%',
    },
})

export default styles;