
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const CreditCardForm = () => {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
    function onSubmit() {
        console.log('form submitted');
    }
    return (
        <View style={styles.mainContainer}>
            <KeyboardAwareScrollView style={styles.container} contentContainerStyle={styles.keyboadAvoidingViewContainer}
                extraScrollHeight={64}
            >
                <TextInput
                    style={styles.textField}
                    placeholder="Cardholder Name"
                    value={name}
                    keyboardType={"default"}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.textField}
                    placeholder="Card Number"
                    value={cardNumber}
                    keyboardType={"decimal-pad"}
                    maxLength={12}
                    onChangeText={(text) => setCardNumber(text)}
                />
                <View style={styles.row}>
                    <TextInput
                        style={[
                            styles.textField,
                            {
                                marginRight: 24,
                            },
                        ]}
                        placeholder="Expiration Date"
                        value={expiration}
                        keyboardType={"decimal-pad"}
                        maxLength={5}
                        onChangeText={(text) => setExpiration(text)}
                    />
                    <TextInput
                        style={styles.textField}
                        placeholder="Security Code"
                        value={cvv}
                        keyboardType={"decimal-pad"}
                        onChangeText={(text) => setCvv(text)}
                        maxLength={3}
                    />
                </View>
                <Button style={styles.row} title="Add card" onPress={onSubmit} />
            </KeyboardAwareScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        marginHorizontal: '3%'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        // marginBottom: 36,
    },
    container: {
        flexGrow: 1,
        // backgroundColor: '#FFFFFF',
      },
      scrollViewContainer:{
        flex:1,
        alignSelf:'stretch'
      },
      keyboadAvoidingViewContainer:{
        flexGrow:1,
        alignSelf:'stretch',
        paddingBottom: '5%'
      },
    textField: {
        // flex: 1,
        height: 50,
        marginTop: 24,
        borderWidth: 1,
        alignItems: 'center',
        marginHorizontal: '3%'
    },
});
export default CreditCardForm;