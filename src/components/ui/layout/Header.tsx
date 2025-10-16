import { FC } from 'react'

const Header: FC = () => {
	return (
		<header className='bg-white border-b border-grey-200'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
				<img src='/logo.png' alt='Metropolitan' className='h-12' />
			</div>
		</header>
	)
}

export default Header
