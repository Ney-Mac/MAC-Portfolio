import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

import './assets/styles/components/app.sass';

function App() {

    return (
        <div id="portfolio">
            <h1>Manuel Armando Cariongo</h1>
            <Sidebar />
            <MainContent />
        </div>
    )
}

export default App
