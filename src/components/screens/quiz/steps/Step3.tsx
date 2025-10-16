import { FC } from 'react'
import { Button } from '../../../ui'
import { CheckboxOption } from '../components'

interface Step3Props {
	selectedGoal: string
	onGoalChange: (goal: string) => void
	onNext: () => void
}

const Step3: FC<Step3Props> = ({ selectedGoal, onGoalChange, onNext }) => {
	const goals = [
		{
			label: 'Для жизни в Дубае',
			image: '/step-3/live.png'
		},
		{
			label: 'Для личного отдыха и получения пассивного дохода',
			image: '/step-3/holiday.png'
		},
		{
			label: 'Только для инвестиций и получения дохода',
			image: '/step-3/investments.png'
		}
	]

	const isValid = selectedGoal !== ''

	return (
		<div className='max-w-7xl mx-auto'>
			<div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-12'>
				<div className='w-full lg:w-1/3 flex flex-col justify-between'>
					<div>
						<p className='text-sm text-grey-300 mb-2'>Вопрос 3</p>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-grey-400'>
							Какова цель приобретения недвижимости?
						</h2>
					</div>
				</div>

				<div className='w-full lg:w-2/3'>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6'>
						{goals.map(goal => (
							<CheckboxOption
								key={goal.label}
								label={goal.label}
								isSelected={selectedGoal === goal.label}
								onToggle={() =>
									onGoalChange(selectedGoal === goal.label ? '' : goal.label)
								}
								imageUrl={goal.image}
							/>
						))}
					</div>
				</div>
			</div>

			<div className='flex justify-end mt-8'>
				<Button
					onClick={onNext}
					disabled={!isValid}
					className={!isValid ? 'opacity-50 cursor-not-allowed' : ''}
					icon={
						<svg
							width='24'
							height='24'
							viewBox='0 0 25 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.5 16L14.5 12L10.5 8'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					}
				>
					Следующий вопрос
				</Button>
			</div>
		</div>
	)
}

export default Step3
