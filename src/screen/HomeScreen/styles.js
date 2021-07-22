import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  brandText: {
    flex:0.1,
    marginVertical: '4%',
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: '800',
  },
  parentContainer: {
    flex:1
  },
  imageContainer:{
    justifyContent:'center',
    alignContent:'center', 
    alignItems:'center'
  },
  image:{
    height: 150, 
    width: 150, 
    justifyContent:'center'
  }
})

export default styles