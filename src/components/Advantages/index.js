import React from "react";
import './index.css';
import image from '../../assets/images/market-pic.svg';
import bitcoin from "../../assets/images/bitcoin-icon.svg";
import verified from "../../assets/images/verified-icon.svg";
import star from "../../assets/images/star-icon.svg";
import chat from "../../assets/images/chat-icon.svg";

export const Advantages = () => {
	return (
		<section className='advantages'>
			<div className='advantages__pic_wrapper'>
				<img className='advantages__pic' src={image} alt='Antares Market'/>
			</div>
			<p className='advantages__text'>
				Наш сайт частных объявлений один из первых предоставляет возможность приобрести и продать необходимые товары и услуги за криптовалюту, изучить варианты и выбрать лучшее на рынке. Со временем мы будем добавлять новые функции и усовершенствовать предоставляемый механизм по максимуму.
			</p>
			<p className='advantages__item'>
				- Заказчикам мы предлагаем бесплатно размещать неограниченное число заказов, выбирать товары в каталоге и просматривать базу поставщиков.
			</p>
			<p className='advantages__item'>
				- А поставщикам использовать гибкую систему тарифов, чтобы реализовать свою продукцию максимально выгодно.
			</p>
			<p className='advantages__buyex'>
				Если у вас нет криптовалюты, но хотите совершать выгодные сделки на нашем сайте, то вы можете приобрести её в один клик с помощью <a className='advantages__link' href='#'>партнёрского сервиса Buyex.</a>
			</p>
			<h3 className='advantages__title'>
				Воспользуйтесь всеми возможностями Antares Market прямо сейчас!
			</h3>
			<div className='advantages__goods'>
				<figure className='goods__item'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={bitcoin} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						Продажа и покупка <br/>товаров за криптовалюту
					</figcaption>
				</figure>
				<figure className='goods__item'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={verified} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						Безопасная сделка с <br/>продавцом и покупателем
					</figcaption>
				</figure>
				<figure className='goods__item'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={star} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						Возможность добавить <br/>товары в избранное
					</figcaption>
				</figure>
				<figure className='goods__item'>
					<div className='icon-wrapper'>
						<img className='goods__pic icon' src={chat} alt='Icon'/>
					</div>
					<figcaption className='goods__capture'>
						Связь с продавцами и <br/>покупателями по всему миру
					</figcaption>
				</figure>
			</div>
		</section>
	)
}
