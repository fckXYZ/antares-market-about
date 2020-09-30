import React from "react";
import './index.css'
import megaphone from '../../assets/images/megaphone-icon.svg';
import fast from '../../assets/images/fast-icon.svg';
import graph from '../../assets/images/graph-icon.svg';
import customer from '../../assets/images/customer-icon.svg';
import {Tr} from "../Tr";

export const Info = (props) => {
	return (
		<section className='info'>
			<div className='info__intro'>
				<h2 className='info__title'>
					Antares Market
				</h2>
				<p className='info__text'>
					<Tr lang={props.lang} string="Это не просто маркетплейс, это сайт частных объявлений с возможностью продавать и покупать необходимые товары с помощью криптовалюты. А благодаря нашему безопасному механизму купли-продажи проводить сделки стало ещё комфортнее."/>
				</p>
			</div>
			<div className='info__goods'>
				<figure className='goods__item'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={megaphone} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						<Tr lang={props.lang} string="Профессиональный инструмент для подачи объявлений"/>
					</figcaption>
				</figure>
				<figure className='goods__item'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={graph} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						<Tr lang={props.lang} string="Предоставляем отчеты и статистику просмотров и предложений"/>
					</figcaption>
				</figure>
				<figure className='goods__item mt'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={fast} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						<Tr lang={props.lang} string="Быстрое размещение объявлений и заказов в одном месте"/>
					</figcaption>
				</figure>
				<figure className='goods__item mt'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={customer} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						<Tr lang={props.lang} string="Консультируем клиентов и мгновенно реагируем на изменения статуса их объявления или заказа"/>
					</figcaption>
				</figure>
			</div>
		</section>
	)
}
