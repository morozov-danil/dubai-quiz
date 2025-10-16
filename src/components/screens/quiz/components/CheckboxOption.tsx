import { FC } from 'react'

interface CheckboxOptionProps {
	label: string
	isSelected: boolean
	onToggle: () => void
	imageUrl?: string
	multiSelect?: boolean
	hideCheckbox?: boolean
	blurImage?: boolean
}

const CheckboxOption: FC<CheckboxOptionProps> = ({
	label,
	isSelected,
	onToggle,
	imageUrl,
	multiSelect = true,
	hideCheckbox = false,
	blurImage = false
}) => {
	return (
		<button
			onClick={onToggle}
			className={`rounded-2xl border-2 text-left transition-all flex flex-col relative overflow-hidden ${
				isSelected
					? 'border-blue border-2'
					: 'border-grey-200 hover:border-grey-150'
			}`}
		>
			{imageUrl && (
				<div
					className={`h-48 bg-grey-200 flex-shrink-0 bg-cover bg-center relative flex items-center justify-center ${
						blurImage ? 'blur-[3px]' : ''
					}`}
					style={{
						backgroundImage: `url('${imageUrl}')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				/>
			)}
			<div className='p-4 bg-white flex-grow flex flex-row items-center justify-between'>
				<p className='font-medium text-grey-400 text-sm'>{label}</p>
				{!hideCheckbox && (
					<div
						className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
							isSelected ? 'bg-black border-black' : 'bg-white border-grey-300'
						}`}
					>
						{isSelected && (
							<svg width='12' height='10' viewBox='0 0 12 10' fill='none'>
								<path
									d='M1 5L4 8L11 1'
									stroke='white'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						)}
					</div>
				)}
			</div>
		</button>
	)
}

export default CheckboxOption
