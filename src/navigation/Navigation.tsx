import { Navigate, Route, Routes } from 'react-router-dom'

import { useNavigateRoutes } from '@/navigation/useNavigateRoutes'

const Navigation = () => {
	const { routes, throwUrl } = useNavigateRoutes()

	return (
		<Routes>
			{routes.map(({ path, component: Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path='*' element={<Navigate to={throwUrl} />} />
		</Routes>
	)
}

export default Navigation
