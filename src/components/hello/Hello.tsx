import style from "./Hello.module.scss";

import {} from "@/pages";
import {} from "@/module";
import {} from "@/components";

export interface ProjectProps {
    children?: string | React.ReactElement | React.ReactElement[];
}

function Project({ children }: ProjectProps) {

    return (
        <>
            <div className={style.hello}>Hello.root</div>
        </>
    );
}

export default Project;
