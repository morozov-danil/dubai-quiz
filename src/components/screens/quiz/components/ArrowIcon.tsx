import { FC } from 'react'

interface ArrowIconProps {
	size?: number
}

const ArrowIcon: FC<ArrowIconProps> = ({ size = 24 }) => (
	<svg
		width={size}
		height={size}
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
)

export default ArrowIcon
