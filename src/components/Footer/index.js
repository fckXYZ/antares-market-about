import React from "react";
import './index.css';

export const Footer = () => {
	return (
		<section className='footer'>
			<div className='footer__links'>
				<div className='footer__docs footer__docs-one'>
					<a className='footer__link' href='#'>
						Техническая поддержка
					</a>
					<a className='footer__link' href='#'>
						Безопасная сделка
					</a>
					<a className='footer__link' href='#'>
						Условия использования
					</a>
				</div>
				<div className='footer__docs footer__docs-two'>
					<a className='footer__link' href='#'>
						Оферта о заключении договора оказания услуг
					</a>
					<a className='footer__link' href='#'>
						Политика о данных пользователей ANTARES MARKET
					</a>
				</div>
			</div>
			<p className='footer__copyright'>
				&copy; 2020 Antares Market
			</p>
		</section>
	)
}
