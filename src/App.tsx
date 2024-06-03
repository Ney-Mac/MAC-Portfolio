import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import LangButton from './components/LangButton';
import './assets/styles/components/app.sass';

function App() {

    return (
        <div id="portfolio">
            <LangButton />
            <h1>Manuel Armando Cariongo</h1>
            <Sidebar />
            <MainContent />
        </div>
    )
}

export default App