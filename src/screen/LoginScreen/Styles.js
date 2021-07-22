import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        // flexDirection:'column',
        // alignItems:'center',
        marginHorizontal: '5%',
        justifyContent:'center'
    },
    fbLoginContainer:{
        // flex:1,
        height: 50,
        alignSelf: 'center',
        borderWidth:1,
        width:'100%',
        alignItems: 'center',
        backgroundColor: 'blue',
        // flexDirection: 'row',
        justifyContent:'center',
        // alignSelf:'stretch'
    },
    brandText: {
        flex:0.3,
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: '800',
      }
})

export default styles;