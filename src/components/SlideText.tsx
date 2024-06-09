import Slider from 'react-slick';

import "../assets/styles/components/slideText.sass";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}


export default () => {
    return (
        <div className="container">
            <Slider {...sliderSettings}>
                {/* {images.map((img, index) => (
                        <img className='img' src={img} key={index} />)
                    )} */}

                <div className="card">
                    <p>teste 1</p>
                </div>
                <div className="card">
                    <p>teste 2</p>
                </div>
                <div className="card">
                    <p>teste 3</p>
                </div>
                <div className="card">
                    <p>teste 4</p>
                </div>
            </Slider>
        </div>
    )
}