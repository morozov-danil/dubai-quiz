import { FC } from 'react'
import { Button } from '../../../ui'
import { CheckboxOption } from '../components'

interface Step2Props {
	selectedRooms: string[]
	onRoomsChange: (rooms: string[]) => void
	onNext: () => void
}

const Step2: FC<Step2Props> = ({ selectedRooms, onRoomsChange, onNext }) => {
	const rooms = [
		{
			label: 'Студия',
			image: '/step-2/image.png'
		},
		{
			label: '1 комната',
			image: '/step-2/image.png'
		},
		{
			label: '2 комнаты',
			image: '/step-2/image.png'
		},
		{
			label: '3 комнаты',
			image: '/step-2/image.png'
		},
		{
			label: '4 комнаты',
			image: '/step-2/image.png'
		},
		{
			label: 'Более 4 комнат',
			image: '/step-2/image.png'
		}
	]
	const isValid = selectedRooms.length > 0

	const handleRoomToggle = (room: string) => {
		onRoomsChange(
			selectedRooms.includes(room)
				? selectedRooms.filter(r => r !== room)
				: [...selectedRooms, room]
		)
	}

	return (
		<div className='max-w-7xl mx-auto'>
			<div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-12'>
				<div className='w-full lg:w-1/3 flex flex-col justify-between'>
					<div>
						<p className='text-sm text-grey-300 mb-2'>Вопрос 2</p>
						<h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-grey-400 mb-2'>
							Сколько комнат вас интересует?
						</h2>
						<p className='text-lg text-grey-300'>
							Выберите один или несколько вариантов
						</p>
					</div>
				</div>

				<div className='w-full lg:w-2/3'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6'>
						{rooms.map(room => (
							<CheckboxOption
								key={room.label}
								label={room.label}
								isSelected={selectedRooms.includes(room.label)}
								onToggle={() => handleRoomToggle(room.label)}
								multiSelect={true}
								hideCheckbox={false}
								imageUrl={room.image}
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

export default Step2
