import { FC } from 'react'

const Footer: FC = () => {
	return (
		<footer className='bg-white border-t border-grey-200'>
			<div className='max-w-7xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8'>
				<div className='flex flex-col gap-4 sm:gap-6 sm:flex-row sm:justify-between sm:items-start'>
					<a
						href='https://greencityre.com/privacy-policy'
						target='_blank'
						rel='noopener noreferrer'
						className='text-xs text-grey-300 hover:text-grey-400 transition-colors order-2 sm:order-1'
					>
						Политика конфиденциальности
					</a>

					<div className='text-left sm:text-right text-xs text-grey-300 space-y-1 order-1 sm:order-2'>
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
