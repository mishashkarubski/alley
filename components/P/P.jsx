import cn from 'classnames';
import styles from './P.module.css';

export const P = ({size = 'm', children, className}) => {
    return (
        <p 
            className={cn(className, {
                [styles.m]: size === 'm',
                [styles.l]: size === 'l',
            })}
        >
            {children}
        </p>
    );
};