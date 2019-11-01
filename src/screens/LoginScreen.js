import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native'
import LoginForm from '../components/LoginForm'

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	//DEMO_USER should come from an api get request from the database of registered users
	const DEMO_USER = { username: 'john', password: '123' }

	//AsyncStorage function which stores a isLoggedIn value of 1, indicating the user has been successfully logged in
	const userLogin = async (username, password) => {
		if (username === DEMO_USER.username && password === DEMO_USER.password) {
			await AsyncStorage.setItem('isLoggedIn', '1')
			navigation.navigate('Profile')
		} else {
			alert('Email or password is incorrect')
		}
	}

	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				resizeMode="contain"
				source={require('../images/login.png')}
			/>
			<LoginForm
				userDetails={{ username, password }}
				onUserChange={value => setUsername(value)}
				onPasswordChange={value => setPassword(value)}
				onFormSubmit={() => userLogin(username, password)}
			/>
		</View>
	)
}

LoginScreen.navigationOptions = () => {
	return {
		header: null
	}
}
const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#2c3e50',
		flex: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 150,
		height: 150
	}
})
export default LoginScreen
