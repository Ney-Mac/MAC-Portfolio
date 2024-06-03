import { useTranslation } from 'react-i18next';

type TranslateReturnType = {
    title: string;
    paragraphs: string[];
}

export default () => {
    const { t } = useTranslation();
    const aboutSection: TranslateReturnType = t('about', { returnObjects: true });

    return (
        <section className='about-container'>
            <h2>{aboutSection.title}</h2>

            {aboutSection.paragraphs.map((value, index) => (
                <p key={index}>{value}</p>
            ))}
        </section>
    )
}