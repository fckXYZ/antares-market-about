import React from "react";
import './index.css';
import {Tr} from "../Tr";

export const Footer = (props) => {
	return (
		<section className='footer'>
			<div className='footer__links'>
				<div className='footer__docs footer__docs-one'>
					<a className='footer__link' href='#'>
						<Tr lang={props.lang} string="Техническая поддержка"/>
					</a>
					<a className='footer__link' href='#'>
						<Tr lang={props.lang} string="Безопасная сделка"/>
					</a>
					<a className='footer__link' href='#'>
						<Tr lang={props.lang} string="Условия использования"/>
					</a>
				</div>
				<div className='footer__docs footer__docs-two'>
					<a className='footer__link' href='#'>
						<Tr lang={props.lang} string="Оферта о заключении договора оказания услуг"/>
					</a>
					<a className='footer__link' href='#'>
						<Tr lang={props.lang} string="Политика о данных пользователей ANTARES MARKET"/>
					</a>
				</div>
			</div>
			<p className='footer__copyright'>
				&copy; 2020 Antares Market
			</p>
		</section>
	)
}
