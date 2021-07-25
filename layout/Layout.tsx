import { LayoutProps } from "./Layout.props";
import {Header} from './Header/Header';
import styles from './Layout.module.css';
import {Footer} from "./Footer/Footer";
import {FunctionComponent} from "react";
import {P} from "../components/P/P";

const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <div className={styles.body}>
                <P className={styles.brief} size='l'>Here you can watch my  finished projects and projects that are still in production👺.</P>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};