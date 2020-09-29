import React from "react";
import './index.css';
import logo from '../../assets/images/logo.svg';

export const Header = () => {

	return (
		<section className='header'>
			<img className='header__logo' src={logo} alt='Antares Logo'/>
			<div className='header__buttons'>
				<a className='header__signup' target='_blank' href='#'>Регистрация</a>
				<button className='header__login'>Войти</button>
			</div>
		</section>
	);
};
