import {withLayout} from "../layout/Layout";
import {Card} from "../components/Card/Card";


function Home({projects}) {
    return (
        <>
            {projects
                .map((project) => (
                    <Card
                        title={project.title}
                        text={project.text}
                        type={project.type}
                        ready={project.ready}
                        link={project.link}
                        git={project.git}
                        key={project.key}
                    />
                ))}
        </>
    );
}

export default withLayout(Home);

export async function getStaticProps() {

    let projects = Object.entries((await import('../data/projects.json')).default);
    projects = projects.map(([key, project]) => ({
        key,
        title: project.title,
        text: project.text,
        type: project.type,
        ready: project.ready,
        link: project.link,
        git: project.git
    }));
    return {
        props: {
            projects
        }
    };
}