import cn from "classnames";
import styles from './Header.module.css';
import {H} from "../../components/H/H";

export const Header = (className) => {
    return (
        <div className={cn(className, styles.header)}>
            <H size={1}>Hello and welcome to my alley!</H>
        </div>
    );
};