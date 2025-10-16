import { FC } from 'react'

interface CheckmarkIconProps {
	size?: number
}

const CheckmarkIcon: FC<CheckmarkIconProps> = ({ size = 20 }) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="12" cy="12" r="10" fill="black" />
		<path
			d="M17 8L10 15L7 12"
			stroke="white"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export default CheckmarkIcon
