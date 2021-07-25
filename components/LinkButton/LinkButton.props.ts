import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface LinkButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
    children: ReactNode;
    link: string | undefined;
    withIcon?: boolean;
}