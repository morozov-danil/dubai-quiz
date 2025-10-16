import { FC, useState } from 'react'
import { Layout } from '../../ui'
import { Step1, Step2, Step3, Step4, Analysis, ContactForm } from './steps'

const Quiz: FC = () => {
	const [currentStep, setCurrentStep] = useState(0)
	const [isAnalyzing, setIsAnalyzing] = useState(false)
	const [answers, setAnswers] = useState({
		propertyType: '',
		rooms: [] as string[],
		goal: '',
		budget: ''
	})

	const handleNext = () => {
		if (currentStep < 3) {
			setCurrentStep(currentStep + 1)
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}

	const handleSubmit = () => {
		setIsAnalyzing(true)
	}

	const handleAnalysisComplete = () => {
		setCurrentStep(4)
		setIsAnalyzing(false)
	}

	const handleContactMethodSelect = (data: { name: string; phone: string }) => {
		const finalAnswers = {
			...answers,
			name: data.name,
			phone: data.phone
		}
		console.log('Final quiz answers:', finalAnswers)
		// Handle final submission
	}

	const handleBackFromContact = () => {
		setCurrentStep(3)
	}

	if (isAnalyzing) {
		return (
			<Layout hiddenHeader>
				<Analysis onComplete={handleAnalysisComplete} />
			</Layout>
		)
	}

	if (true) {
		return (
			<Layout hiddenHeader>
				<ContactForm
					onBack={handleBackFromContact}
					onSubmit={handleContactMethodSelect}
				/>
			</Layout>
		)
	}

	return (
		<Layout hiddenHeader>
			<div className='bg-white py-12 md:py-20 relative'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					{currentStep === 0 && (
						<Step1
							selectedType={answers.propertyType}
							onTypeChange={type =>
								setAnswers({ ...answers, propertyType: type })
							}
							onNext={handleNext}
						/>
					)}

					{currentStep === 1 && (
						<Step2
							selectedRooms={answers.rooms}
							onRoomsChange={rooms => setAnswers({ ...answers, rooms })}
							onNext={handleNext}
						/>
					)}

					{currentStep === 2 && (
						<Step3
							selectedGoal={answers.goal}
							onGoalChange={goal => setAnswers({ ...answers, goal })}
							onNext={handleNext}
						/>
					)}

					{currentStep === 3 && (
						<Step4
							selectedBudget={answers.budget}
							onBudgetChange={budget => setAnswers({ ...answers, budget })}
							onSubmit={handleSubmit}
						/>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Quiz
