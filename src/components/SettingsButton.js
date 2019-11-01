import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
const SettingsButton = ({ navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('Settings')
			}}
		>
			<Feather style={styles.icon} name="settings" />
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	icon: {
		marginHorizontal: 15,
		fontSize: 30,
		color: '#fff'
	}
})
export default SettingsButton
