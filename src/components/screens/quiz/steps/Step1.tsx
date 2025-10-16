import { FC, useState } from 'react'
import { Button } from '../../../ui'
import { CheckboxOption, CustomOption } from '../components'

interface Step1Props {
	selectedType: string
	onTypeChange: (type: string) => void
	onNext: () => void
}

const Step1: FC<Step1Props> = ({
	selectedType,
	onTypeChange,
	onNext
}) => {
	const types = [
		{ id: 'apartments', label: 'Апартаменты', image: '/step-1/apartaments.png' },
		{ id: 'penthouse', label: 'Пентхаус', image: '/step-1/penthouse.png' },
		{ id: 'villa', label: 'Виллы / Таунхаус', image: '/step-1/villa.png' },
		{ id: 'undefined', label: 'Не определились', image: '/step-1/not-found.png' }
	]
	const [customValue, setCustomValue] = useState('')

	const isCustomSelected = selectedType === 'custom'
	const isValid = selectedType !== '' && (selectedType !== 'custom' || customValue.trim() !== '')

	const handleCustomChange = (value: string) => {
		setCustomValue(value)
		if (selectedType !== 'custom') {
			onTypeChange('custom')
		}
	}

	return (
		<div className="max-w-7xl mx-auto">
			<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-12">
				<div className="w-full lg:w-1/3 flex flex-col justify-between">
					<div>
						<p className="text-sm text-grey-300 mb-2">Вопрос 1</p>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-grey-400">
							Какой вид недвижимости в Дубае вас интересует?
						</h2>
					</div>
				</div>

				<div className="w-full lg:w-2/3">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
						{types.map((type) => (
							<CheckboxOption
								key={type.id}
								label={type.label}
								isSelected={selectedType === type.id}
								onToggle={() => onTypeChange(selectedType === type.id ? '' : type.id)}
								imageUrl={type.image}
								blurImage={type.id === 'undefined'}
							/>
						))}

						<CustomOption
							value={customValue}
							onValueChange={handleCustomChange}
							isSelected={isCustomSelected}
							placeholder="Что вы ищете?"
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-end mt-8">
				<Button
					onClick={onNext}
					disabled={!isValid}
					className={!isValid ? 'opacity-50 cursor-not-allowed' : ''}
					icon={
						<svg
							width="24"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.5 16L14.5 12L10.5 8"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
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

export default Step1
