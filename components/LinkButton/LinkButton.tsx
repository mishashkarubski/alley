import {LinkButtonProps} from "./LinkButton.props";
import styles from './LinkButton.module.css';
import GitHubIcon from './Github.svg';
import cn from "classnames";

export const LinkButton = ({children, link, withIcon = false, ...props}: LinkButtonProps): JSX.Element => {
    return (
        <a
            href={link}
            className={cn(styles.linkButton, {
                [styles.black]: withIcon,
                [styles.outline]: !withIcon,
            })}
            {...props}
        >
            {children} {withIcon ? <GitHubIcon className={styles.icon} /> : ''}
        </a>
    );
};