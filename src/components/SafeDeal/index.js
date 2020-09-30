import React from "react";
import './index.css';
import {Tr} from "../Tr";

export const SafeDeal = (props) => {
	return (
		<section className='safeDeal'>
			<div className='safeDeal__pic'>
				<h2 className='safeDeal__title'>
					<Tr lang={props.lang} string="Обеспечение безопасности сделок — наша главная цель."/>
				</h2>
			</div>
		</section>
	)
}
