import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar
} from "react-native";
import { useSelector } from "react-redux";

const DashboardScreen = () => {
    const { user } = useSelector(s => s.user)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View>
                <Text>DASHBOARD SCREEM</Text>
                {user?.map(k => <View style={{ margin: 20 }}>
                    <Text>{k.name}</Text>
                    <Text>{k.age}</Text>
                    <Text>{k.email}</Text>
                </View>)}
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