import React from "react";
import './index.css';
import logo from '../../assets/images/logo.svg';
import langIcon from '../../assets/images/lang-icon.svg';
import downArrow from '../../assets/images/down-arrow.svg';
import check from '../../assets/images/check-icon.svg';
import login from '../../assets/images/login.svg';
import {Tr} from "../Tr";

class Header extends React.Component {
	state = {
		is_opened: false,
		list: [
			{key: 'ru', value: 'Русский'},
			{key: 'en', value: 'English'},
			{key: 'es', value: 'Spanish'},
			{key: 'cn', value: '中文'},
			{key: 'IN', value: 'Indonesian'},
			{key: 'fr', value: 'Français'},
		],
		active_lang: this.props.lang,
	}

	toggleDropdown = () => {
		this.setState({
			is_opened: !this.state.is_opened,
		})
	}

	setActiveLang = (e) => {
		const newLang = this.state.list.find((lang) => lang.value === e.target.textContent).key;
		this.setState({
			active_lang: newLang,
		})
		this.props.onChange(newLang)
	}

	render() {
		const languages = this.state.list;
		return (
			<div className='header-wrapper'>
				<section className='header'>
					<img className='header__logo' src={logo} alt='Antares Logo'/>
					<div className='header__buttons'>
						<div className='dropdown-wrapper' onClick={(e) => this.toggleDropdown(e)}>
							<div className={`dropdown-title-wrapper ${this.state.is_opened ? 'is_opened' : null}`}>
								<img className='langIcon' alt="Select Language" src={langIcon} />
								<div className='header-dropdown'>
									<p className='dropdown-title'>
										{languages.find((lang) => lang.key === this.state.active_lang).value}
									</p>
									<img className='dropdown-icon' src={downArrow}/>
								</div>
							</div>
							<ul className={`dropdown-list ${this.state.is_opened ? 'is_opened' : null}`}>
								{languages.map((lang) => {
									return (
										<li className={`dropdown-lang ${lang.key === this.state.active_lang ? 'active' : null}`} key={lang.key} onClick={(e) => this.setActiveLang(e)}>
											<p>{lang.value}</p>
											{lang.key === this.state.active_lang ? <img className='check' src={check}/> : null }
										</li>
									)
								})}
							</ul>
						</div>

						<a className='header__signup' target='_blank' href='#'>
							<Tr lang={this.state.active_lang} string="Регистрация"/>
						</a>
						<button className='header__login'>
							<img className='login-icon' src={login}/>
							<p className='login__text'>
								<Tr lang={this.state.active_lang} string="Войти"/>
							</p>
						</button>
					</div>
				</section>
				<section className='moto'>
					<h1 className='moto__title'>
						<Tr lang={this.state.active_lang} string="Антарес маркет - "/>
						<br/>
						<Tr lang={this.state.active_lang} string="команда которая заботится о вашем будущем"/>
					</h1>
					<button className='moto__button'>
						<Tr lang={this.state.active_lang} string="Посмотреть объявления"/>
					</button>
				</section>

			</div>
		);

	}
};

export default Header;
