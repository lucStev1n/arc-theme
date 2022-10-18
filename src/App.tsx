import style from "./app.module.scss";

import {} from "@/pages";
import {} from "@/module";
import { Notice } from "@/components";

export interface ProjectProps {
    children?: string | React.ReactElement | React.ReactElement[];
}

function Project({ children }: ProjectProps) {
    log.debug("hello");

    return (
        <div id={`${style["root"]}`}>
            <aside className={`${style["navigate"]}`}>
                <div>搜索</div>=
                <div>
                    <div>帖子帖子帖子帖子帖子帖</div>
                    <div>直播</div>
                    <div>语音</div>
                </div>
                =
                <div>
                    <div>好友</div>
                    <div>小组</div>
                </div>
                =
                <div>
                    <div>设置</div>
                    <div>账号</div>
                    <div>
                        更多
                        {/* <ul>
                            <li>关于</li>
                            <li>工作机会</li>
                            <li>联系客服</li>
                            <li>社区准则</li>
                            <li>隐私政策</li>
                        </ul> */}
                    </div>
                </div>
            </aside>
            <main className={`${style["view"]}`}>
                <Notice />
                <section>info</section>
                <section>main</section>
            </main>
        </div>
    );
}

export default Project;
