import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import LangButton from './components/LangButton';
import GoToTopButton from './components/GoToTopButton';
import { LangProvider } from './context/LangContext';
import './assets/styles/components/app.sass';

function App() {

    return (
        <div id="portfolio">
            <LangProvider>
                <LangButton />
                <h1>Manuel Armando Cariongo</h1>
                <Sidebar />
                <MainContent />
                <GoToTopButton />
            </LangProvider>
        </div>
    )
}

export default App