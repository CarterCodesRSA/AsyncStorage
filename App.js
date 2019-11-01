import { AsyncStorage } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { LoginScreen, UserProfile, UserSettings } from './src/screens'

const navigator = createStackNavigator({
	Profile: UserProfile,
	Settings: UserSettings
})

const AuthStack = createStackNavigator({ Login: LoginScreen })

const AuthLoadingScreen = ({ navigation }) => {
	//immediately invoked on appload as initialRouteName is AuthLoadingScreen
	//IIAFE was used, possibility of using useEffec to invoke the function
	const loadUserData = (async () => {
		const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
		navigation.navigate(isLoggedIn !== '1' ? 'Auth' : 'App')
	})()

	return null
}

export default createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading: AuthLoadingScreen,
			App: navigator,
			Auth: AuthStack
		},
		{
			initialRouteName: 'AuthLoading'
		}
	)
)
