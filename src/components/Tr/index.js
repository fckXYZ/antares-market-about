import React from "react";
import ru from '../../lang/ru.json'
import en from '../../lang/en.json'
import es from '../../lang/es.json'
import IN from '../../lang/in.json'
import fr from '../../lang/fr.json'
import cn from '../../lang/cn.json'


export const Tr = (props) => {
	const { lang, string } = props;

	const langs = {
		ru,
		en,
		es,
		IN,
		fr,
		cn,
	}
	const translate = (text) => {
		const neededLang = langs[lang];
		if (text in neededLang) {
			return neededLang[text];
		}
		return text;
	}

	return (
		<React.Fragment>
			{translate(string)}
		</React.Fragment>
	)
}
