import { FC, useState, useEffect } from 'react'

interface AnalysisProps {
	onComplete: () => void
}

const Analysis: FC<AnalysisProps> = ({ onComplete }) => {
	const messages = [
		'Анализируем ваши предпочтения...',
		'Подбираем лучшие варианты...',
		'Уточняем детали...',
		'Проверяем доступность...',
		'Завершаем подборку...'
	]

	const [currentMessage, setCurrentMessage] = useState(0)

	useEffect(() => {
		if (currentMessage < messages.length) {
			const timer = setTimeout(() => {
				setCurrentMessage(currentMessage + 1)
			}, 600)
			return () => clearTimeout(timer)
		} else {
			const completeTimer = setTimeout(() => {
				onComplete()
			}, 1000)
			return () => clearTimeout(completeTimer)
		}
	}, [currentMessage, onComplete, messages.length])

	return (
		<div className='min-h-screen bg-grey-100 flex items-center justify-center px-4'>
			<div className='text-center max-w-md'>
				<h2 className='text-2xl sm:text-3xl font-bold text-grey-400 mb-12'>
					Ответьте на несколько вопросов и получите объекты, соответствующие вашим потребностям
				</h2>

				<div className='flex justify-center mb-12'>
					<svg
						className='w-24 h-24 animate-spin'
						viewBox='0 0 50 50'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle
							cx='25'
							cy='25'
							r='20'
							stroke='#c7c7c7'
							strokeWidth='2'
						/>
						<circle
							cx='25'
							cy='25'
							r='20'
							stroke='url(#grad1)'
							strokeWidth='3'
							strokeLinecap='round'
							strokeDasharray='35 100'
							fill='none'
						/>
						<defs>
							<linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
								<stop offset='0%' stopColor='#1378d1' />
								<stop offset='100%' stopColor='#2c2c2c' />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div className='min-h-20 flex items-center justify-center'>
					<p className='text-lg sm:text-xl text-grey-400 font-medium'>
						{currentMessage < messages.length
							? messages[currentMessage]
							: 'Все готово!'}
					</p>
				</div>

				<div className='mt-12 flex justify-center gap-3'>
					{messages.map((_, idx) => (
						<div
							key={idx}
							className={`h-3 w-3 rounded-full transition-all duration-300 ${
								idx <= currentMessage ? 'bg-black' : 'bg-grey-200'
							}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default Analysis
