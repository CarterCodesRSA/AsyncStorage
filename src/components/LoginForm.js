import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from 'react-native'

const LoginForm = ({
	onUserChange,
	onPasswordChange,
	onFormSubmit,
	userDetails
}) => {
	return (
		<View style={styles.container}>
			<TextInput
				value={userDetails.user}
				onChangeText={onUserChange}
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				keyboardType="email-address"
				returnKeyType="next"
				placeholder="Email"
				placeholderTextColor="rgba(225,225,225,0.7)"
			/>

			<TextInput
				value={userDetails.password}
				onChangeText={onPasswordChange}
				style={styles.input}
				returnKeyType="go"
				placeholder="Password"
				placeholderTextColor="rgba(225,225,225,0.7)"
				secureTextEntry
			/>

			<TouchableOpacity style={styles.buttonContainer} onPress={onFormSubmit}>
				<Text style={styles.buttonText}>LOGIN</Text>
			</TouchableOpacity>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		padding: 10,
		width: 300
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(225,225,225,0.2)',
		marginBottom: 10,
		padding: 10,
		color: '#fff'
	},
	buttonContainer: {
		backgroundColor: '#2980b6',
		paddingVertical: 15
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700'
	}
})
export default LoginForm
