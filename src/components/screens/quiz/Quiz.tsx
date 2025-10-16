import { FC, useState } from 'react'
import { Layout } from '../../ui'

const Quiz: FC = () => {
	const [currentStep, setCurrentStep] = useState(0)
	const [answers, setAnswers] = useState({
		propertyType: '',
		rooms: [] as string[],
		goal: '',
		budget: '',
	})

	const handleNext = () => {
		if (currentStep < 3) {
			setCurrentStep(currentStep + 1)
		}
	}

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1)
		}
	}

	const handleSubmit = () => {
		console.log('Quiz answers:', answers)
		// Handle form submission
	}

	return (
		<Layout>
			<div className="bg-white min-h-screen">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
					{/* Step 1: Property Type */}
					{currentStep === 0 && (
						<div className="max-w-2xl mx-auto">
							<div className="mb-8">
								<p className="text-sm text-grey-300 mb-2">Вопрос 1</p>
								<h2 className="text-4xl md:text-5xl font-bold text-grey-400 mb-8">
									Какой вид недвижимости в Дубае вас интересует?
								</h2>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
								{['Апартаменты', 'Пентхаус', 'Виллы / Таунхаус', 'Не определились'].map(
									(type) => (
										<button
											key={type}
											onClick={() =>
												setAnswers({ ...answers, propertyType: type })
											}
											className={`p-6 rounded-2xl border-2 text-left transition-all ${
												answers.propertyType === type
													? 'border-blue bg-blue-light'
													: 'border-grey-200 bg-white hover:border-grey-150'
											}`}
										>
											<div className="h-32 bg-grey-200 rounded-lg mb-4"></div>
											<p className="font-medium text-grey-400">{type}</p>
										</button>
									)
								)}
							</div>

							<div className="flex justify-end">
								<button
									onClick={handleNext}
									className="bg-blue hover:bg-blue-dark text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-colors"
								>
									Следующий вопрос
									<svg
										width="24"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.5 16L14.5 12L10.5 8"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					)}

					{/* Step 2: Rooms */}
					{currentStep === 1 && (
						<div className="max-w-2xl mx-auto">
							<div className="mb-8">
								<p className="text-sm text-grey-300 mb-2">Вопрос 2</p>
								<h2 className="text-4xl md:text-5xl font-bold text-grey-400 mb-2">
									Сколько комнат вас интересует?
								</h2>
								<p className="text-lg text-grey-300">
									Выберите один или несколько вариантов
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
								{[
									'Студия',
									'1 комната',
									'2 комнаты',
									'3 комнаты',
									'4 комнаты',
									'Более 4 комнат',
								].map((room) => (
									<button
										key={room}
										onClick={() => {
											setAnswers({
												...answers,
												rooms: answers.rooms.includes(room)
													? answers.rooms.filter((r) => r !== room)
													: [...answers.rooms, room],
											})
										}}
										className={`p-4 rounded-xl border-2 text-center transition-all ${
											answers.rooms.includes(room)
												? 'border-blue bg-blue-light'
												: 'border-grey-200 bg-white hover:border-grey-150'
										}`}
									>
										<div className="h-24 bg-grey-200 rounded-lg mb-3"></div>
										<p className="font-medium text-grey-400 text-sm">{room}</p>
									</button>
								))}
							</div>

							<div className="flex justify-between">
								<button
									onClick={handleBack}
									className="text-blue font-semibold py-3 px-8 rounded-full flex items-center gap-2 hover:text-blue-dark transition-colors"
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.5 16L10.5 12L14.5 8"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Вернуться назад
								</button>
								<button
									onClick={handleNext}
									className="bg-blue hover:bg-blue-dark text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-colors"
								>
									Следующий вопрос
									<svg
										width="24"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.5 16L14.5 12L10.5 8"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					)}

					{/* Step 3: Goal */}
					{currentStep === 2 && (
						<div className="max-w-2xl mx-auto">
							<div className="mb-8">
								<p className="text-sm text-grey-300 mb-2">Вопрос 3</p>
								<h2 className="text-4xl md:text-5xl font-bold text-grey-400">
									Какова цель приобретения недвижимости?
								</h2>
							</div>

							<div className="grid grid-cols-1 gap-4 mb-12">
								{[
									'Для жизни в Дубае',
									'Для личного отдыха и получения пассивного дохода',
									'Только для инвестиций и получения дохода',
								].map((goal) => (
									<button
										key={goal}
										onClick={() => setAnswers({ ...answers, goal })}
										className={`p-6 rounded-xl border-2 text-left transition-all ${
											answers.goal === goal
												? 'border-blue bg-blue-light'
												: 'border-grey-200 bg-white hover:border-grey-150'
										}`}
									>
										<div className="h-32 bg-grey-200 rounded-lg mb-4"></div>
										<p className="font-medium text-grey-400">{goal}</p>
									</button>
								))}
							</div>

							<div className="flex justify-between">
								<button
									onClick={handleBack}
									className="text-blue font-semibold py-3 px-8 rounded-full flex items-center gap-2 hover:text-blue-dark transition-colors"
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.5 16L10.5 12L14.5 8"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Вернуться назад
								</button>
								<button
									onClick={handleNext}
									className="bg-blue hover:bg-blue-dark text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-colors"
								>
									Следующий вопрос
									<svg
										width="24"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.5 16L14.5 12L10.5 8"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					)}

					{/* Step 4: Budget */}
					{currentStep === 3 && (
						<div className="max-w-2xl mx-auto">
							<div className="mb-8">
								<p className="text-sm text-grey-300 mb-2">Вопрос 4</p>
								<h2 className="text-4xl md:text-5xl font-bold text-grey-400">
									В рамках какого бюджета ищите недвижимость?
								</h2>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
								{[
									'Менее 250,000 $',
									'250,000 $ - 500,000 $',
									'500,000 $ - 1M $',
									'1M $ - 3M $',
									'Более 3M $',
								].map((budget) => (
									<button
										key={budget}
										onClick={() => setAnswers({ ...answers, budget })}
										className={`p-6 rounded-xl border-2 text-left transition-all ${
											answers.budget === budget
												? 'border-blue bg-blue-light'
												: 'border-grey-200 bg-white hover:border-grey-150'
										}`}
									>
										<div className="h-24 bg-grey-200 rounded-lg mb-4"></div>
										<p className="font-medium text-grey-400">{budget}</p>
									</button>
								))}
							</div>

							<div className="flex justify-between">
								<button
									onClick={handleBack}
									className="text-blue font-semibold py-3 px-8 rounded-full flex items-center gap-2 hover:text-blue-dark transition-colors"
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.5 16L10.5 12L14.5 8"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
									Вернуться назад
								</button>
								<button
									onClick={handleSubmit}
									className="bg-blue hover:bg-blue-dark text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-colors"
								>
									Получить подборку
									<svg
										width="24"
										height="24"
										viewBox="0 0 25 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.5 16L14.5 12L10.5 8"
											stroke="white"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Quiz
