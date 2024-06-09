import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import '../assets/styles/components/projectCard.sass';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
    title: string;
    description: string;
}

const images: string[] = [];

export default ({ }: Props) => {
    const { t } = useTranslation(); 

    return (
        <div className="project-card-grid">
            <div className='card-grid'>
                <h3>Titulo do Projeto</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus, maxime. Hic, exercitationem in.</p>
                <p className='subtitle'>{t('technologies.title')}</p>
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C++</li>
                </ul>

            </div>
            <div className="carousel-container">
                <Carousel
                    infiniteLoop
                    showThumbs={false}
                >
                    {images.map((img, index) => (
                        <img className='carousel-img' src={img} key={index} />)
                    )}
                </Carousel>
            </div >
        </div >
    )
}