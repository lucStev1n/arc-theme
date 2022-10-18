import style from "./notice.module.scss";

import {} from "@/pages";
import {} from "@/module";
import {} from "@/components";

export interface noticeProps {
    children?: string | React.ReactElement | React.ReactElement[];
}

function Project({ children }: noticeProps) {
    log.debug(`notice render`);

    return (
        <>
            <section id={`${style["notice"]}`}>
                注册成功
            </section>
        </>
    );
}

export default Project;
