import { FC, useState } from 'react'
import { Button } from '../../../ui'
import { CheckboxOption, CustomOption } from '../components'

interface Step4Props {
	selectedBudget: string
	onBudgetChange: (budget: string) => void
	onSubmit: () => void
}

const Step4: FC<Step4Props> = ({
	selectedBudget,
	onBudgetChange,
	onSubmit
}) => {
	const budgets = [
		{
			label: 'Менее 250,000 $',
			image: '/step-4/1.png'
		},
		{
			label: '250,000 $ - 500,000 $',
			image: '/step-4/2.png'
		},
		{
			label: '500,000 $ - 1M $',
			image: '/step-4/3.png'
		},
		{
			label: '1M $ - 3M $',
			image: '/step-4/4.png'
		},
		{
			label: 'Более 3M $',
			image: '/step-4/5.png'
		}
	]
	const [customValue, setCustomValue] = useState('')

	const isCustomSelected = selectedBudget === 'custom'
	const isValid =
		selectedBudget !== '' &&
		(selectedBudget !== 'custom' || customValue.trim() !== '')

	const handleCustomChange = (value: string) => {
		setCustomValue(value)
		if (selectedBudget !== 'custom') {
			onBudgetChange('custom')
		}
	}

	return (
		<div className='max-w-7xl mx-auto'>
			<div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-12'>
				<div className='w-full lg:w-1/3 flex flex-col justify-between'>
					<div>
						<p className='text-sm text-grey-300 mb-2'>Вопрос 4</p>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-grey-400'>
							В рамках какого бюджета ищите недвижимость?
						</h2>
					</div>
				</div>

				<div className='w-full lg:w-2/3'>
					<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
						{budgets.map(budget => (
							<CheckboxOption
								key={budget.label}
								label={budget.label}
								isSelected={selectedBudget === budget.label}
								onToggle={() =>
									onBudgetChange(
										selectedBudget === budget.label ? '' : budget.label
									)
								}
								imageUrl={budget.image}
							/>
						))}

						<CustomOption
							value={customValue}
							onValueChange={handleCustomChange}
							isSelected={isCustomSelected}
							placeholder='Какой бюджет?'
						/>
					</div>
				</div>
			</div>

			<div className='flex justify-end mt-8'>
				<Button
					onClick={onSubmit}
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
					Получить подборку
				</Button>
			</div>
		</div>
	)
}

export default Step4
