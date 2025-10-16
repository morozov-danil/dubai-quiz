import { FC, useState } from 'react'

interface CustomOptionProps {
	value: string
	onValueChange: (value: string) => void
	isSelected: boolean
	placeholder?: string
}

const CustomOption: FC<CustomOptionProps> = ({
	value,
	onValueChange,
	isSelected,
	placeholder = 'Что вы ищете?'
}) => {
	const [isFocused, setIsFocused] = useState(false)

	return (
		<div
			className={`rounded-2xl border-2 text-left transition-all flex flex-col relative overflow-hidden h-full ${
				isSelected
					? 'border-blue border-2'
					: 'border-grey-200 hover:border-grey-150'
			}`}
		>
			<div className='p-4 bg-white flex-grow flex flex-col justify-between'>
				<div className='text-5xl'>✍️</div>

				<div className='mb-2'>
					<h3 className='text-lg lg:text-xl leading-tight font-bold text-grey-400 mb-3'>
						Впишите свой вариант
					</h3>

					<input
						type='text'
						value={value}
						onChange={e => {
							e.stopPropagation()
							onValueChange(e.target.value)
						}}
						onFocus={e => {
							e.stopPropagation()
							setIsFocused(true)
						}}
						onBlur={() => setIsFocused(false)}
						onClick={e => e.stopPropagation()}
						placeholder={placeholder}
						className={`w-full bg-white rounded-full py-2 px-3 outline-none transition-all text-sm text-grey-400 placeholder-grey-200 border border-grey-150 ${
							isFocused ? 'border-blue' : 'border-grey-150'
						}`}
					/>
				</div>
			</div>
		</div>
	)
}

export default CustomOption
