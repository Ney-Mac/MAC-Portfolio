import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/styles/components/lanButton.sass';

export default () => {
    const { i18n } = useTranslation();
    const [activeLang, setActiveLang] = useState('pt');

    const handleToggle = (lang: string) => {
        setActiveLang(lang);
        i18n.changeLanguage(lang);
    };

    return (
        <div className="lang-button-container">
            <div className='lang-button'>
                <button
                    className={`pt ${activeLang === 'pt' ? 'active' : ''}`}
                    onClick={() => handleToggle('pt')}
                >Pt</button>
                <button
                    className={`en ${activeLang === 'en' ? 'active' : ''}`}
                    onClick={() => handleToggle('en')}
                >En</button>
            </div>
        </div>
    );
};