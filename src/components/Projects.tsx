import { useTranslation } from 'react-i18next';

type ReturnTranslationType = {
    title: string;
    seeProjectsButton: string;
}

export default () => {
    const { t } = useTranslation();

    const projectsSection: ReturnTranslationType = t('projects', { returnObjects: true });

    return (
        <section className='projects-container'>
            <h2>{projectsSection.title}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dicta aut, quod nam dignissimos, quaerat sed odio ullam culpa cupiditate sequi itaque. Nobis, consequatur vero. Recusandae minus dolorem laudantium ipsam?
            </p>
            <a href="#" className="btn">
                {projectsSection.seeProjectsButton}
            </a>
        </section>
    )
}