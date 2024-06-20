import { createContext, useState } from "react";
import { useTranslation } from 'react-i18next';

type LangContextProps = {
    activeLang: 'pt' | 'en';
    changeLang: (lang: 'pt' | 'en') => void;
}

export const LangContext = createContext<LangContextProps>({
    activeLang: 'pt',
    changeLang(lang) { console.log(lang) },
});

type Props = {
    children: React.ReactNode;
}

export const LangProvider = ({ children }: Props) => {
    const [activeLang, setActiveLang] = useState<'pt' | 'en'>('pt');
    const { i18n } = useTranslation();

    const changeLang = (lang: 'pt' | 'en') => {
        setActiveLang(lang);
        i18n.changeLanguage(lang);
    }

    return (
        <LangContext.Provider value={{ activeLang, changeLang }}>
            {children}
        </LangContext.Provider>
    )
}

