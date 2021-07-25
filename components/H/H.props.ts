import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface HProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    size?: 1 | 2,
    children: ReactNode
}