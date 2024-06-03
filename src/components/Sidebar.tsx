import Avatar from '../assets/images/mac-tecnosociety.jpg';

import InformationsContainer from './InformationsContainer';
import SocialNetworks from './SocialNetworks';

import { useTranslation } from 'react-i18next';

import '../assets/styles/components/sidebar.sass';

type TranslationReturnType = {
    title: string;
    phone: string;
    location: string;
    downloadButton: string;
}

export default () => {
    const { t } = useTranslation();

    const sidebarSection: TranslationReturnType = t('sideBar', { returnObjects: true });

    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Manuel Cariongo' />

            <p className="title">{sidebarSection.title}</p>

            <SocialNetworks />
            <InformationsContainer />

            <a href="" className="btn">
                {sidebarSection.downloadButton}
            </a>
        </aside>
    )
}