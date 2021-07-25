import {CardProps} from "./Card.props";
import styles from './Card.module.css';
import {H} from "../H/H";
import {Tag} from "../Tag/Tag";
import {LinkButton} from "../LinkButton/LinkButton";
import {P} from "../P/P";

export const Card = ({ready=false, type, title, text, link, git, ...props}: CardProps): JSX.Element => {

    return (
        <div className={styles.card} {...props}>
            <div className={styles.title}>
                <H size={2}>{title}</H>
            </div>
            <div className={styles.ready}>
                {ready ? <Tag color='green'>Finished</Tag> : <Tag color='yellow'>Production</Tag>}
            </div>
            <div className={styles.type}>
                {
                    type == 'Website' ? <Tag color='purple'>{type}</Tag>
                    : type == 'Telegram bot' ? <Tag color='blue'>{type}</Tag>
                    : <Tag color='orange'>{type}</Tag>
                }
            </div>
            <div className={styles.text}>
                <P size='m'>{text}</P>
            </div>
            <div className={styles.buttons}>
                <LinkButton link={git} withIcon>Learn more</LinkButton>
                {type == 'Website' ? <LinkButton link={link}>Visit</LinkButton> : ''}
            </div>
        </div>
    );
};