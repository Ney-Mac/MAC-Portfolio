import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';

import '../assets/styles/components/maincontent.sass';

export default () => {
    return (
        <div id='main-content'>
            <About />
            <Technologies />
            <Projects />
        </div>
    )
}