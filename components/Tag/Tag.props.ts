import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLParagraphElement> {
    color: 'green' | 'yellow' | 'purple' | 'blue' | 'orange',
    children: ReactNode,
}