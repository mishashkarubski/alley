import {HProps} from "./H.props";
import cn from 'classnames';
import styles from './H.module.css';

export const H = ({size, children, ...props}: HProps): JSX.Element => {
    switch (size) {
        case 1:
            return <h1 className={styles.h1} {...props}>{children}</h1>;
        case 2:
            return <h2 className={styles.h2} {...props}>{children}</h2>;
        default:
            return <></>;
    }
};