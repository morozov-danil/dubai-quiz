import { FC, useState } from 'react'

interface ContactMethodProps {
	onSelect: (method: string) => void
}

const ContactMethod: FC<ContactMethodProps> = ({ onSelect }) => {
	const [selectedMethod, setSelectedMethod] = useState<string>('')

	const contactMethods = [
		{
			id: 'whatsapp',
			name: 'WhatsApp',
			icon: '/icons/whatsapp.svg'
		},
		{
			id: 'telegram',
			name: 'Telegram',
			icon: '/icons/telegram.svg'
		},
		{
			id: 'phone',
			name: 'Телефон',
			icon: '/icons/phone.svg'
		}
	]

	const handleSelect = (method: string) => {
		setSelectedMethod(method)
		onSelect(method)
	}

	return (
		<div className='bg-white py-12 md:py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='max-w-2xl mx-auto text-center mb-12'>
					<h2 className='text-3xl sm:text-4xl font-bold text-grey-400 mb-4'>
						Как с вами связаться?
					</h2>
					<p className='text-grey-300'>
						Выберите предпочитаемый способ связи
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto'>
					{contactMethods.map(method => (
						<button
							key={method.id}
							onClick={() => handleSelect(method.id)}
							className={`flex flex-col items-center justify-center p-8 rounded-3xl border-2 transition-all ${
								selectedMethod === method.id
									? 'border-blue bg-blue/5'
									: 'border-grey-200 bg-white hover:border-grey-300'
							}`}
						>
							<img
								src={method.icon}
								alt={method.name}
								className='w-12 h-12 mb-4'
							/>
							<p className='text-lg font-semibold text-grey-400'>{method.name}</p>
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default ContactMethod
