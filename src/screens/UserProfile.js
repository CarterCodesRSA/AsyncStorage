import React from 'react'
import { View, Button, AsyncStorage, StyleSheet } from 'react-native'
import SettingsButton from '../components/SettingsButton'

const UserProfile = ({ navigation }) => {
	const logout = async () => {
		await AsyncStorage.clear()
		navigation.navigate('Auth')
	}

	return (
		<View style={styles.container}>
			<Button
				title="Logout"
				onPress={() => logout()}
				style={styles.buttonText}
			/>
		</View>
	)
}

UserProfile.navigationOptions = ({ navigation }) => {
	return {
		title: 'User Profile',
		headerRight: <SettingsButton navigation={navigation} />,
		headerStyle: styles.headerBackground,
		headerTitleStyle: styles.headerTitle
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#2980b6',
		flex: 1,
		justifyContent: 'center'
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700'
	},
	headerBackground: {
		backgroundColor: '#2c3e50'
	},
	headerTitle: {
		color: '#fff'
	}
})
export default UserProfile
