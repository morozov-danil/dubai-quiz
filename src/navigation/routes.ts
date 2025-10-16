import { Home, Quiz } from '../components/screens'

import { IRoute } from './navigation.types'

export const userRoutes: IRoute[] = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/quiz',
		component: Quiz
	}
]

export default userRoutes
