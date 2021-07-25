import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    ready?: boolean;
    type: 'Website' | 'Telegram bot' | 'Blender';
    title: string;
    text: string;
    link?: string;
    git: string;
}