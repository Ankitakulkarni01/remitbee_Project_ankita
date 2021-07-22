import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import Styles from './styles'
import TransactionData from '../../transaction'
import AntDesign from 'react-native-vector-icons/AntDesign'

const renderItem = ({ item }) => {
    return (
        <View style={Styles.renderItemContainer}>
            <View style={Styles.iconContainer}>
                {
                    item.card === "Mastercard"
                    ?
                        <AntDesign name="creditcard" size={25} color="black" />
                    :
                        <AntDesign name="wallet" size={25} />
                }
            </View>
            <View style={Styles.parentContainer}>
                <Text style={Styles.walletText}>{item.card === "Mastercard" ? `${item.card}  ${item.cardNumber}` : item.card}</Text>
                <Text style={Styles.priceText}>{item.place}</Text>
                <Text style={Styles.amountText}>{item.amount}</Text>
            </View>
        </View>
    )
}

const Splash = (props) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.transactionTextContainer}>
            <Text style={Styles.transactionText}>Transaction</Text>
            </View>
            <FlatList
                data={TransactionData}
                style={Styles.flatListContainer}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default Splash