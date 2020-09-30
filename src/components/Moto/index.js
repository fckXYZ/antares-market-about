import React from "react";
import './index.css';
import {Tr} from "../Tr";

export const Moto = (props) => {
	return (
		<section className='moto'>
			<h1 className='moto__title'>
				<Tr lang={props.lang} string="Антарес маркет - команда которая заботится о вашем будущем"/>
			</h1>
			<button className='moto__button'>
				<Tr lang={props.lang} string="Посмотреть объявления"/>
			</button>
		</section>
	)
}
