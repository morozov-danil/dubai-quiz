import { FC, ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
	onClick?: () => void
	children: ReactNode
	className?: string
	type?: 'button' | 'submit' | 'reset'
	disabled?: boolean
	icon?: ReactNode
	iconPosition?: 'left' | 'right'
}

const Button: FC<ButtonProps> = ({
	onClick,
	children,
	className = '',
	type = 'button',
	disabled = false,
	icon,
	iconPosition = 'right'
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`btn-primary ${className}`}
		>
			{iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>}
			{children}
			{iconPosition === 'right' && icon && <span className="ml-2">{icon}</span>}
		</button>
	)
}

export default Button
