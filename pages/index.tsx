import {P} from "../components/P/P";
import {Tag} from "../components/Tag/Tag";
import {LinkButton} from "../components/LinkButton/LinkButton";
import {withLayout} from "../layout/Layout";
import {Card} from "../components/Card/Card";
import {InferGetStaticPropsType} from "next";

function Home({projects}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
    return (
        <>
            {projects
                .map((project: Record<string, never>) => (
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

export async function getStaticProps(): Promise<Record<string, unknown>> {

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