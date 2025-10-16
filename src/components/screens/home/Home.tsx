import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Layout } from '../../ui'
import CookieConsent from '../../ui/CookieConsent'
import './Home.css'

const Home: FC = () => {
	const navigate = useNavigate()

	const features = [
		{
			id: 1,
			icon: '/icons/payment.svg',
			title: 'Рассрочка 0% от застройщиков',
			description:
				'Предоставим точный прогноз доходности по каждому объекту — с учётом аренды, расходов и роста цен.'
		},
		{
			id: 2,
			icon: '/icons/house.svg',
			title: 'Первоначальный взнос от 5%',
			description:
				'Берём на себя всё: от подбора объекта до аренды, управления и перепродажи с прибылью.'
		},
		{
			id: 3,
			icon: '/icons/visa.svg',
			title: 'Виза резидента ОАЭ для вас и семьи',
			description:
				'Сотни довольных клиентов и ни одной спорной сделки — работаем на результат и рекомендации.'
		}
	]
	return (
		<>
			<Layout>
				<div className='bg-white'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 auto-rows-max lg:auto-rows-auto items-center relative'>
						<div className='order-1 lg:order-1 flex flex-col justify-center relative z-10'>
							<h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-grey-400 mb-3 sm:mb-4 leading-tight'>
								Подберём
								<br />
								недвижимость
								<br />в Дубае за 2 минуты
							</h1>
							<p className='text-xs sm:text-sm md:text-base text-grey-300 mb-4 sm:mb-6 leading-relaxed'>
								Пройдите тест и получите каталог с лучшими предложениями на
								рынке недвижимости Дубая по вашим параметрам
							</p>

							<div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4'>
								<Button
									onClick={() => navigate('/quiz')}
									className='w-full sm:w-auto'
								>
									Подобрать недвижимость
								</Button>
								<img
									src='/review.png'
									alt='Google Reviews 4.7'
									className='hidden sm:block h-14 hover:opacity-80 transition-opacity object-contain flex-shrink-0'
								/>
							</div>
						</div>

						<div className='order-2 lg:order-2 flex flex-col relative'>
							<div className='hidden sm:block'>
								<img
									src='/home.png'
									alt='Modern Dubai Property'
									className='w-full h-64 md:h-96 object-cover rounded-3xl'
								/>
							</div>
							<div className='sm:hidden flex flex-col'>
								<img
									src='/home.png'
									alt='Modern Dubai Property'
									className='w-full h-48 object-cover rounded-2xl mt-4'
								/>
								<div className='flex justify-end mt-3'>
									<img
										src='/review.png'
										alt='Google Reviews 4.7'
										className='h-12 hover:opacity-80 transition-opacity object-contain'
									/>
								</div>
							</div>
						</div>
					</div>

					<div className='mt-6 sm:mt-8 md:mt-12'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
							{features.map(feature => (
								<div
									key={feature.id}
									className='bg-grey-150 rounded-3xl p-6 sm:p-8 shadow-xl feature-card'
								>
									<div className='mb-4 sm:mb-6 flex'>
										<div className='w-12 sm:w-14 h-12 sm:h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0 border-2 border-grey-200'>
											<img
												src={feature.icon}
												alt={feature.title}
												className='h-6 sm:h-8 w-6 sm:w-8'
											/>
										</div>
									</div>
									<h3 className='text-grey-400 font-bold text-base sm:text-lg mb-2 sm:mb-3'>
										{feature.title}
									</h3>
									<p className='text-grey-300 text-xs sm:text-sm leading-relaxed'>
										{feature.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			</Layout>
			<CookieConsent />
		</>
	)
}

export default Home
