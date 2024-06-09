import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiBootstrap,
    DiSass,
    DiJava,
} from 'react-icons/di';

import {
    SiTypescript,
    SiSpringboot,
    SiMongodb
} from 'react-icons/si'

import { useTranslation } from 'react-i18next';

import '../assets/styles/components/technologies.sass';

const technologies = [
    {
        id: 'js',
        name: 'JavaScript',
        icon: <DiJsBadge />,
        years: 5
    },
    { 
        id: 'ts',
        name: 'TypeScript',
        icon: <SiTypescript />,
        years: 2
    },
    { 
        id: 'react-native',
        name: 'React Native',
        icon: <DiReact />,
        years: 3
    },
    {
        id: 'node',
        name: 'Node.js',
        icon: <DiNodejsSmall />,
        years: 3
    },
    { 
        id: 'react',
        name: 'React',
        icon: <DiReact />,
        years: 3
    },
    { 
        id: 'html',
        name: 'HTML5',
        icon: <DiHtml5 />,
        years: 5
    },
    {
        id: 'css',
        name: 'CSS3',
        icon: <DiCss3 />,
        years: 5
    },
    {
        id: 'bootstrap',
        name: 'Bootstrap',
        icon: <DiBootstrap />,
        years: 5
    },
    {
        id: 'sass',
        name: 'Sass',
        icon: <DiSass />,
        years: 1
    },
    {
        id: 'java',
        name: 'Java',
        icon: <DiJava />,
        years: 4
    },
    {
        id: 'spring',
        name: 'Spring Boot',
        icon: <SiSpringboot />,
        years: 1
    },
    {
        id: 'mysql',
        name: 'MySql',
        icon: <DiMysql />,
        years: 2
    },
    {
        id: 'mongo',
        name: 'MongoDb',
        icon: <SiMongodb />,
        years: 3
    },
];

export default () => {
    const { t } = useTranslation();

    return (
        <section className='technologies-container'>
            <h2>{t('technologies.title')}</h2>

            <div className="technologies-grid">
                {technologies.map(tech => (
                    <div className='technology-card' id={tech.id} key={tech.id}>
                        {tech.icon}

                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>
                                <span>{t('technologies.descriptor')}: </span>
                                {tech.years} {t('technologies.year')}{tech.years > 1 ? 's' : ''}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}