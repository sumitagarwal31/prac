import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    StatusBar
} from "react-native";
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import CommonButton from "../components/CommonButton";
import CommonTextInput from "../components/CommonTextInput";


const LoginScreen = ({ navigation }) => {
    const [username, _username] = useState('');
    const [password, _password] = useState('');
    const [usernameError, _usernameError] = useState('');
    const [passwordError, _passwordError] = useState('');

    const _handleSubmit = () => {
        username == '' ? _usernameError('*Please Enter the Username') : _usernameError('');
        password == '' ? _passwordError('*Please Enter the Password') : _passwordError('');
        if (username && password) {
            // navigation.navigate('DashboardScreen')
            useDispatch(login({ 'username': username, 'password': password }))
        }
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />
            <View style={styles.view}>
                <CommonTextInput
                    placeholder='Enter your Username'
                    changeText={(username) => _username(username)}
                    cuurent={username}
                />
                {usernameError !== '' ? (
                    <View>
                        <Text style={{ color: 'red', fontSize: 12 }}>{usernameError}</Text>
                    </View>
                ) : null}
                <CommonTextInput
                    placeholder='Enter your Password'
                    changeText={(password) => _password(password)}
                    cuurent={password}
                />
                {passwordError !== '' ? (
                    <View>
                        <Text style={{ color: 'red', fontSize: 12 }}>{passwordError}</Text>
                    </View>
                ) : null}
                <CommonButton title="Login" press={() => { _handleSubmit() }} />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginScreen