import {PProps} from "./P.props";
import cn from 'classnames';
import styles from './P.module.css';

export const P = ({size = 'm', children, className, ...props}: PProps): JSX.Element => {
    return (
        <p 
            className={cn(className, {
                [styles.m]: size == 'm',
                [styles.l]: size == 'l',
            })}
            {...props}
        >
            {children}
        </p>
    );
};