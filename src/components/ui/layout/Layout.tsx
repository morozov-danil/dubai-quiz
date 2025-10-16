import { FC, PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout: FC<PropsWithChildren<{ hiddenHeader?: boolean }>> = ({
	children,
	hiddenHeader
}) => {
	return (
		<div className='flex flex-col min-h-screen bg-white'>
			{hiddenHeader ? null : <Header />}
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
