import Avatar from '../assets/images/mac-tecnosociety.jpg';

import InformationsContainer from './InformationsContainer';
import SocialNetworks from './SocialNetworks';

import '../assets/styles/components/sidebar.sass';

export default () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Manuel Cariongo' />

            <p className="title">Desenvolvedor</p>

            <SocialNetworks />
            <InformationsContainer />

            <a href="" className="btn">
                Download Currículo
            </a>
        </aside>
    )
}