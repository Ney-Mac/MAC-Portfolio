import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../assets/styles/components/informationscontainer.sass';

export default () => {
    return (
        <section id='information'>
            <div className="info-card">
                <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Telefone</h3>
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
                    <h3>Localização</h3>
                    <p>Luanda / Angola</p>
                </div>
            </div>
        </section>
    )
}