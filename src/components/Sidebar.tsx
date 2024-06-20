import { useContext } from 'react';

import Avatar from '../assets/images/mac-tecnosociety.jpg';

import InformationsContainer from './InformationsContainer';
import SocialNetworks from './SocialNetworks';

import { useTranslation } from 'react-i18next';

import { LangContext } from '../context/LangContext';

import { CV_ENGLISH_URL, CV_PORTUGUESE_URL } from '../configs';

import '../assets/styles/components/sidebar.sass';

type TranslationReturnType = {
    title: string;
    phone: string;
    location: string;
    downloadButton: string;
}

export default () => {
    const { t } = useTranslation();
    const { activeLang } = useContext(LangContext);

    const sidebarSection: TranslationReturnType = t('sideBar', { returnObjects: true });

    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Manuel Cariongo' />

            <p className="title">{sidebarSection.title}</p>

            <SocialNetworks />
            <InformationsContainer />

            <a
                href={activeLang === 'en' ? CV_ENGLISH_URL : CV_PORTUGUESE_URL}
                title={sidebarSection.downloadButton}
                className="btn"
                type='download'
            >
                {sidebarSection.downloadButton}
            </a>
        </aside>
    )
}