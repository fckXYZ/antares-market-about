import React from "react";
import './index.css';
import image from '../../assets/images/market-pic.png';
import bitcoin from "../../assets/images/bitcoin-icon.svg";
import verified from "../../assets/images/verified-icon.svg";
import star from "../../assets/images/star-icon.svg";
import chat from "../../assets/images/chat-icon.svg";
import {Tr} from "../Tr";

export const Advantages = (props) => {
	return (
		<section className='advantages'>
			<div className='advantages__pic_wrapper'>
				<img className='advantages__pic' src={image} alt='Antares Market'/>
			</div>
			<p className='advantages__text'>
				<Tr lang={props.lang} string="Наш сайт частных объявлений один из первых предоставляет возможность приобрести и продать необходимые товары и услуги за криптовалюту, изучить варианты и выбрать лучшее на рынке. Со временем мы будем добавлять новые функции и усовершенствовать предоставляемый механизм по максимуму."/>
			</p>
			<p className='advantages__item'>
				<Tr lang={props.lang} string="- Заказчикам мы предлагаем бесплатно размещать неограниченное число заказов, выбирать товары в каталоге и просматривать базу поставщиков."/>
			</p>
			<p className='advantages__item'>
				<Tr lang={props.lang} string="- А поставщикам использовать гибкую систему тарифов, чтобы реализовать свою продукцию максимально выгодно."/>
			</p>
			<p className='advantages__buyex'>
				<Tr lang={props.lang} string="Если у вас нет криптовалюты, но хотите совершать выгодные сделки на нашем сайте, то вы можете приобрести её в один клик с помощью "/>
				<a className='advantages__link' target='_blank' href='https://buyex.exchange/'>
					<Tr lang={props.lang} string="партнёрского сервиса Buyex."/>
				</a>
			</p>
			<h3 className='advantages__title'>
				<Tr lang={props.lang} string="Воспользуйтесь всеми возможностями Antares Market прямо сейчас!"/>
			</h3>
			<div className='advantages__goods'>
				<figure className='goods__item'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={bitcoin} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						<Tr lang={props.lang} string="Продажа и покупка товаров за криптовалюту"/>
					</figcaption>
				</figure>
				<figure className='goods__item'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={verified} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						<Tr lang={props.lang} string="Безопасная сделка с продавцом и покупателем"/>
					</figcaption>
				</figure>
				<figure className='goods__item mt'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={star} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						<Tr lang={props.lang} string="Возможность добавить товары в избранное"/>
					</figcaption>
				</figure>
				<figure className='goods__item mt'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={chat} alt='Icon'/>
					</div>
					<figcaption className='goods__capture wide'>
						<Tr lang={props.lang} string="Связь с продавцами и покупателями по всему миру"/>
					</figcaption>
				</figure>
			</div>
		</section>
	)
}
