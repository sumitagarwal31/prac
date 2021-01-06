import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const CommonButton = ({ title, press }) => {
console.log('pre', press)
    return (
        <TouchableOpacity onPress={press} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        borderRadius: 9,
        height: 50,
        width: '50%',
        marginVertical: 15,
        borderWidth:1,
        borderColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    text: {
        color: '#fff',
        fontSize: 20,
    }
})

export default CommonButton