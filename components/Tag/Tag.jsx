import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({color, children}) => {
    return (
        <div
            className={cn(styles.tag, {
                [styles.orange]: color === 'orange',
                [styles.purple]: color === 'purple',
                [styles.blue]: color === 'blue',
                [styles.yellow]: color === 'yellow',
                [styles.green]: color === 'green',
            })}
        >
            <div className={styles.adaptive}>
                {children}
            </div>
        </div>
    );
};