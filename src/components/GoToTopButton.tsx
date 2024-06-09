import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa6";
import '../assets/styles/components/gototopButton.sass';

export default () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            {showButton && <button
                className="scrollToTop-button"
                onClick={scrollToTop}
                title="Voltar ao topo"
                type="button"
            >
                <FaChevronUp size="1.2rem" />
            </button>}
        </>
    )
}