import { FC, useState } from 'react'

interface ContactFormProps {
	onBack: () => void
	onSubmit: (data: { name: string; phone: string }) => void
}

const ContactForm: FC<ContactFormProps> = ({ onBack, onSubmit }) => {
	const [formData, setFormData] = useState({
		name: '',
		phone: ''
	})
	const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

	const isValid =
		formData.name.trim() !== '' &&
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
		<div className='bg-grey-100 min-h-screen flex items-center py-8 md:py-0 relative'>
			<div className='max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center relative z-10'>
					<div className='rounded-3xl p-8 sm:p-10'>
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
							</div>

							<button
								type='submit'
								disabled={!isValid}
								className='py-3 px-8 md:w-auto w-full bg-black hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-full transition-all mt-6'
							>
								Получить подборку
							</button>
						</form>
					</div>

					<div className='hidden lg:flex items-center justify-center'>
						<div className='relative w-full max-w-full'>
							<img
								src='/form.png'
								alt='Подборка недвижимости'
								className='w-full h-auto'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
