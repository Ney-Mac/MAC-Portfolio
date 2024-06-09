import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import '../assets/styles/components/projects.sass';

type ReturnTranslationType = {
    title: string;
    seeProjectsButton: string;
    introduction: string;
    hideProjectsButton: string;
}

const projects = [
    {
        title: 'TItulo',
        description: 'Descricao'
    }
]

export default () => {
    const { t } = useTranslation();
    const [showProjects, setShowProjects] = useState(true );

    const handleShowProjects = () => {
        setShowProjects(!showProjects);
    }

    const projectsSection: ReturnTranslationType = t('projects', { returnObjects: true });

    return (
        <section className='projects-container'>
            <h2>{projectsSection.title}</h2>
            <p>{projectsSection.introduction}</p>

            {showProjects && <div className="project-grid">
                {projects.map((proj, index) => (
                    <ProjectCard
                        key={index}
                        title={proj.title}
                        description={proj.description}
                    />
                ))}
            </div>}

            <button className="btn" onClick={handleShowProjects} type='button'>
                {showProjects ? projectsSection.hideProjectsButton : projectsSection.seeProjectsButton}
            </button>
        </section>
    )
}