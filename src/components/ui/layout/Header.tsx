import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Header: FC = () => {
	const navigate = useNavigate()

	return (
		<header className='bg-white border-b border-grey-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between'>
				<button
					onClick={() => navigate('/')}
					className='hover:opacity-80 transition-opacity'
				>
					<img src='/logo.png' alt='Green City Real Estate' className='h-12' />
				</button>
			</div>
		</header>
	)
}

export default Header
