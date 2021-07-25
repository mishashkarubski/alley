import { HeaderProps } from "./Header.props";
import cn from "classnames";
import styles from './Header.module.css';
import {H} from "../../components/H/H";

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
        <div className={cn(className, styles.header)} {...props}>
            <H size={1}>Hello and welcome to my alley!</H>
        </div>
    );
};