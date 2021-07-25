import cn from "classnames";
import {format} from 'date-fns';
import styles from './Footer.module.css';
import {P} from "../../components/P/P";
import GithubIcon from './Github.svg';
import InstagramIcon from './Instagram.svg';
import TelegramIcon from './Telegram.svg';
import VKIcon from './VK.svg';

export const Footer = ({className}) => {
    return (
        <footer className={cn(className, styles.footer)}>
            <div className={styles.social}>
                <P className={styles.paragraph}>My social media: </P>
                <div className={styles.icons}>
                    <a href='https://github.com/mishashkarubski'><GithubIcon className={styles.icon} /></a>
                    <a href='https://www.instagram.com/mishashkarubski/'><InstagramIcon className={styles.icon} /></a>
                    <TelegramIcon className={styles.icon} />
                    <a href='https://vk.com/michaelshkarubski'><VKIcon className={styles.icon} /></a>
                </div>
            </div>
            <div className={styles.rights}>
                <P>Alley © {format(new Date(), 'yyyy')} - All rights reserved</P>
            </div>
        </footer>
    );
};