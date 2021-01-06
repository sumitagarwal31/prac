import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const CommonTextInput = ({ changeText, cuurent, placeholder }) => {

    return (
        <TextInput
            style={styles.inputStyle}
            onChangeText={changeText}
            value={cuurent}
            placeholder={placeholder}
            placeholderTextColor="#C0C0C0"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            underlineColorAndroid="transparent"
        />
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        color: '#808080',
        height: 50,
        width: '80%',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#000',
        backgroundColor: 'transparent',
        marginVertical: 20
    },
})

export default CommonTextInput