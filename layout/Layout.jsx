import {Header} from './Header/Header';
import styles from './Layout.module.css';
import {Footer} from "./Footer/Footer";
import {P} from "../components/P/P";

const Layout = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <div className={styles.body}>
                <P size='l'>Here you can watch my  finished projects and projects that are still in production👺.</P>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
};

export const withLayout = (Component) => {
    return function withLayoutComponent(props) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};