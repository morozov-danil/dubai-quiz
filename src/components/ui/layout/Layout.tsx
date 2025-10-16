import { FC, PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='flex flex-col min-h-screen bg-white'>
			<Header />
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
