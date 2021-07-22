import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  brandText: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: '800',
  }, 
  transactionTextContainer:{
    marginHorizontal: '2%',
    flex:0.2,
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row'
  },
  transactionText:{
    fontSize: 27, 
    flex:1, 
    fontWeight: 'bold', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row'
  },
  flatListContainer:{
    flex:2,
    marginHorizontal:'2%'
  },
  renderItemContainer:{
    height: 150, 
    padding: '2%', 
    flexDirection: 'row' , 
    elevation: 1, 
    borderWidth:1, 
    marginVertical:'3%'
  },
  iconContainer:{
    flex: 0.3, 
    alignItems:'center', 
    justifyContent: 'center' 
  }, 
  parentContainer:{
    flex: 1
  },
  walletText:{
    flex:1, 
    fontSize:18, 
    color:'gray'
  },
  priceText:{
    flex:0.5, 
    fontSize:14,
    fontWeight: '700'
  },
  amountText:{
    flex:1, 
    fontSize:14,
    fontWeight: '700'
  }
})

export default styles