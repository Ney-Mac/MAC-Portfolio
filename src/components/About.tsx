import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import '../assets/styles/components/about.sass';

type TranslateReturnType = {
    title: string;
    paragraphs: string[];
}

export default () => {
    const { t } = useTranslation();
    const aboutSection: TranslateReturnType = t('about', { returnObjects: true });

    const [showText, setShowText] = useState(false);

    const handleShowText = () => {
        setShowText(!showText);
    }

    return (
        <section className={`about-container `}>
            <h2>{aboutSection.title}</h2>

            {aboutSection.paragraphs.slice(0, 2).map((value, index) => (
                <p key={index}>{value}</p>
            ))}

            <div className={`about-text-container ${showText ? 'show-text' : ''}`}>
                <div className="about-text">
                    {aboutSection.paragraphs.slice(2).map((value, index) => (
                        <p key={index}>{value}</p>
                    ))}
                </div>
            </div>

            <button
                title='mostrar texto'
                type='button'
                className='show-text-button'
                onClick={handleShowText}
            >
                {showText ? <FaChevronUp /> : <FaChevronDown />}
            </button>
        </section>
    )
}