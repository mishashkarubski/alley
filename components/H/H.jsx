import styles from './H.module.css';

export const H = ({size, children}) => {
    switch (size) {
        case 1:
            return <h1 className={styles.h1}>{children}</h1>;
        case 2:
            return <h2 className={styles.h2}>{children}</h2>;
        default:
            return <></>;
    }
};