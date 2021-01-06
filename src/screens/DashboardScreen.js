import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar
} from "react-native";

const DashboardScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View>
                <Text>DASHBOARD SCREEM</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
})

export default DashboardScreen