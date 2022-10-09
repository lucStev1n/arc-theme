//import style from './app.module.scss';

import {} from "@/pages";
import {} from "@/module";
import { Hello } from "@/components";

export interface ProjectProps {
    children?: string | React.ReactElement | React.ReactElement[];
}

function Project({ children }: ProjectProps) {
    log.debug("hello");

    return (
        <>
            <Hello />
        </>
    );
}

export default Project;
