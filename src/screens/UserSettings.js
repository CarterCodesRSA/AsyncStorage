import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UserSettings = () => {
	return (
		<View style={styles.container}>
			<Text>Welcome to user settings</Text>
		</View>
	)
}

UserSettings.navigationOptions = () => {
	return {
		title: 'Settings',
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
	headerBackground: {
		backgroundColor: '#2c3e50'
	},
	headerTitle: {
		color: '#fff'
	}
})
export default UserSettings
