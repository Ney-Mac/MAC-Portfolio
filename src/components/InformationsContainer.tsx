import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import { useTranslation } from 'react-i18next';

import '../assets/styles/components/informationscontainer.sass';

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
        <section id='information'>
            <div className="info-card">
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>{sidebarSection.phone}</h3>
                    <p>+244 937 524 533</p>
                </div>
            </div>

            <div className="info-card">
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>Email</h3>
                    <p>mcariongo@gmail.com</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3>{sidebarSection.location}</h3>
                    <p>Luanda / Angola</p>
                </div>
            </div>
        </section>
    )
}