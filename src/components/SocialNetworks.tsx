import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

import '../assets/styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/ney-mac/' },
    { name: 'github', icon: <FaGithub />, link: 'https://github.com/Ney-Mac' },
    { name: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/mcariongo/' },
    { name: 'facebook', icon: <FaFacebook />, link: 'https://www.facebook.com/manuel.acariongo/' },
];

export default () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network, index) => (
                <a
                    href={network.link}
                    className='social-btn'
                    id={network.name}
                    key={index}
                    target='blank'
                >
                    {network.icon}
                </a>
            ))}
        </section>
    )
}