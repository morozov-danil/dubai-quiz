import { FC, useState, useEffect } from 'react'
import './CookieConsent.css'

const CookieConsent: FC = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const cookieConsent = localStorage.getItem('cookie-consent')
		if (!cookieConsent) {
			setIsVisible(true)
		}
	}, [])

	const handleAccept = () => {
		localStorage.setItem('cookie-consent', 'accepted')
		setIsVisible(false)
	}

	if (!isVisible) return null

	return (
		<div className='cookie-consent'>
			<div className='cookie-consent-content'>
				<p className='cookie-consent-text'>
					Мы используем cookies для улучшения работы сайта. Продолжая
					пользоваться сайтом, вы согласаетесь на их использование.{' '}
					<a href='#' className='cookie-consent-link'>
						Подробнее
					</a>
				</p>
				<button onClick={handleAccept} className='cookie-consent-btn'>
					Согласиться
				</button>
			</div>
		</div>
	)
}

export default CookieConsent
