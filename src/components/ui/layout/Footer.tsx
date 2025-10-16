import { FC } from 'react'

const Footer: FC = () => {
	return (
		<footer className='bg-white border-t border-grey-200'>
			<div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8'>
				<div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6'>
					<a
						href='https://greencityre.com/privacy-policy'
						target='_blank'
						rel='noopener noreferrer'
						className='text-xs text-grey-300 hover:text-grey-400 transition-colors'
					>
						Политика конфиденциальности
					</a>

					<div className='text-right text-xs text-grey-300 space-y-1'>
						<p>
							<span className='font-medium'>Адрес:</span> Office 305, Binghatti
							House,
							<br />
							JVC, Dubai, UAE
						</p>
						<p>
							<span className='font-medium'>Телефон:</span> +971 58 582 3377
						</p>
						<p>
							<span className='font-medium'>Email:</span> info@greencityre.com
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
