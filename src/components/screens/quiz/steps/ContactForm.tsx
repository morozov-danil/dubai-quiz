import { FC, useState } from 'react'

interface ContactFormProps {
	onBack: () => void
	onSubmit: (data: { name: string; email: string; phone: string }) => void
}

const ContactForm: FC<ContactFormProps> = ({ onBack, onSubmit }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '+995'
	})
	const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
	const [agreedToMarketing, setAgreedToMarketing] = useState(false)

	const isValid =
		formData.name.trim() !== '' &&
		formData.email.trim() !== '' &&
		formData.phone.trim() !== '' &&
		agreedToPrivacy

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (isValid) {
			onSubmit(formData)
		}
	}

	return (
		<div className='bg-grey-100 py-12 md:py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='max-w-2xl'>
					<div className='bg-white rounded-3xl p-8 sm:p-10'>
						<div className='mb-2 flex items-center gap-2'>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' className='text-grey-300'>
								<path d='M9 12l2 2 4-4' />
							</svg>
							<span className='text-sm text-grey-300'>Вы ответили на все вопросы</span>
						</div>

						<h2 className='text-3xl sm:text-4xl font-bold text-grey-400 mb-3'>
							Ваша подборка лучшей недвижимости Дубая готова
						</h2>

						<p className='text-grey-300 mb-8'>
							Оставьте свои контактные данные и получите каталог с лучшими
							предложениями на рынке недвижимости Дубая по вашим параметрам
						</p>

						<form onSubmit={handleSubmit} className='space-y-4'>
							<input
								type='text'
								name='name'
								placeholder='Укажите ваше имя'
								value={formData.name}
								onChange={handleChange}
								className='w-full px-6 py-4 bg-grey-100 border border-grey-200 rounded-full text-grey-400 placeholder-grey-300 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all'
							/>

							<input
								type='email'
								name='email'
								placeholder='Укажите ваш Email'
								value={formData.email}
								onChange={handleChange}
								className='w-full px-6 py-4 bg-grey-100 border border-grey-200 rounded-full text-grey-400 placeholder-grey-300 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all'
							/>

							<input
								type='tel'
								name='phone'
								placeholder='+971 555 12 34 56'
								value={formData.phone}
								onChange={handleChange}
								className='w-full px-6 py-4 bg-grey-100 border border-grey-200 rounded-full text-grey-400 placeholder-grey-300 focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all'
							/>

							<div className='space-y-3 py-4'>
								<label className='flex items-start gap-3 cursor-pointer group'>
									<input
										type='checkbox'
										checked={agreedToPrivacy}
										onChange={e => setAgreedToPrivacy(e.target.checked)}
										className='mt-1 w-5 h-5 rounded border-2 border-grey-300 bg-white cursor-pointer accent-blue'
									/>
									<span className='text-sm text-grey-300 group-hover:text-grey-400 transition-colors'>
										Предоставляя свою личную информацию, я согласился с{' '}
										<a
											href='#'
											className='text-blue font-medium hover:underline'
										>
											Политикой конфиденциальности
										</a>{' '}
										Metropolitan Group, законами о защите данных и{' '}
										<a
											href='#'
											className='text-blue font-medium hover:underline'
										>
											Условиями пользования
										</a>
										.
									</span>
								</label>

								<label className='flex items-start gap-3 cursor-pointer group'>
									<input
										type='checkbox'
										checked={agreedToMarketing}
										onChange={e => setAgreedToMarketing(e.target.checked)}
										className='mt-1 w-5 h-5 rounded border-2 border-grey-300 bg-white cursor-pointer accent-blue'
									/>
									<span className='text-sm text-grey-300 group-hover:text-grey-400 transition-colors'>
										Я согласился получать информацию о предложениях, сделках и
										услугах с этого веб-сайта (по желанию).
									</span>
								</label>
							</div>

							<button
								type='submit'
								disabled={!isValid}
								className='py-3 px-8 bg-black hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all mt-6'
							>
								Получить подборку
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
