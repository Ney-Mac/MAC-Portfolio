import { useContext } from 'react';
import { LangContext } from '../context/LangContext';
import '../assets/styles/components/lanButton.sass';

export default () => {
    const { activeLang, changeLang } = useContext(LangContext);

    return (
        <div className="lang-button-container">
            <div className='lang-button'>
                <button
                    className={`pt ${activeLang === 'pt' ? 'active' : ''}`}
                    onClick={() => changeLang('pt')}
                >Pt</button>
                <button
                    className={`en ${activeLang === 'en' ? 'active' : ''}`}
                    onClick={() => changeLang('en')}
                >En</button>
            </div>
        </div>
    );
};