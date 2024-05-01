import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

import '../assets/styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: 'linkedin', icon: <FaLinkedinIn /> },
    { name: 'github', icon: <FaGithub /> },
    { name: 'instagram', icon: <FaInstagram /> },
    { name: 'facebook', icon: <FaFacebook /> },
];

export default () => {
    return (
        <section id="social-networks">
            {socialNetworks.map((network, index) => (
                <a href="#" className='social-btn' id={network.name} key={index}>
                    {network.icon}
                </a>
            ))}
        </section>
    )
}