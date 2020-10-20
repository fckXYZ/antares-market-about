import React from "react";
import './index.css';
import {Tr} from "../Tr";
import {BASE_URL} from "../../constants/constants";

export const Footer = (props) => {
	const toTelegram = () => {
		window.open('https://t.me/antaresmarket', '_blank');
	}
	const toFacebook = () => {
		window.open('https://www.facebook.com/groups/853007495232705/', '_blank');
	}
	return (
		<section className='footer'>
			<div className='footer__links'>
				<div className='footer__docs footer__docs-one'>
					<a className='footer__link' href={`${BASE_URL}support`}>
						<Tr lang={props.lang} string="Техническая поддержка"/>
					</a>
					<a className='footer__link' href={`${BASE_URL}safe-deal`}>
						<Tr lang={props.lang} string="Безопасная сделка"/>
					</a>
					<a className='footer__link' href={`${BASE_URL}terms-of-use`}>
						<Tr lang={props.lang} string="Условия использования"/>
					</a>
				</div>
				<div className='footer__docs footer__docs-two'>
					<a className='footer__link' href={`${BASE_URL}public-offer`}>
						<Tr lang={props.lang} string="Оферта о заключении договора оказания услуг"/>
					</a>
					<a className='footer__link mt' href={`${BASE_URL}users-policy`}>
						<Tr lang={props.lang} string="Политика о данных пользователей ANTARES MARKET"/>
					</a>
				</div>
			</div>
			<div className='copy-icons-wrap'>
				<p className='footer__copyright'>
					&copy; 2020 Antares Market
				</p>
				<div className="icons">
					<div className="icon-link telegram" onClick={() => toTelegram()} />
					<div className="icon-link facebook" onClick={() => toFacebook()} />
				</div>
			</div>
		</section>
	)
}
