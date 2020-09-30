import React, {useState}  from 'react';
import './App.css';
import Header from "./components/Header";
import {Info} from "./components/Info";
import {Advantages} from "./components/Advantages";
import {SafeDeal} from "./components/SafeDeal";
import {Footer} from "./components/Footer";

function App() {
    const [lang, setLang] = useState('ru');
    return (
    <div className="root">
        <Header lang={lang} onChange={(lang) => setLang(lang)}/>
        <div className='main'>
            <Info lang={lang}/>
            <Advantages lang={lang}/>
            <SafeDeal lang={lang}/>
            <Footer lang={lang}/>
        </div>
    </div>
  );
}

export default App;
