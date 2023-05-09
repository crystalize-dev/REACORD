import cl from "./Sidebar-1.module.css";
import logo from "../../img/logoRaw.png"
import classNames from "classnames";
import Icon from "../icon/Icon";


const Sidebar1 = ({groups, setGroups, active, setActive, main}) => {
    const getClassForElem = (group) => {
        let result = [cl.imgWrapper]

        if (active.id === group.id) {
            if (group.img) result.push(cl.activeNoBackground, cl.withImg)
            else result.push(cl.active, cl.noText)
        } else {
            if (group.img) result.push(cl.withImg)
            else result.push(cl.noText)
        }

        return classNames(...result)
    }

    return (
        <aside className={cl.sidebar}>
            <div className={cl.elem} onClick={() => setActive(main)}>
                <div className={active.id === 0 ? classNames(cl.selector, cl.show) : classNames(cl.selector, cl.hide)}/>
                <div className={getClassForElem(main)}>
                    <img alt={"home"} src={logo} className={cl.home}/>
                </div>

                <div className={cl.hint}>{main.name}</div>
            </div>
            <hr/>

            {
                groups.map(group =>
                    <div className={cl.elem} key={group.id} onClick={() => setActive(group)}>
                        <div className={active.id === group.id ? classNames(cl.selector, cl.show) : classNames(cl.selector, cl.hide)}/>
                        <div className={getClassForElem(group)}>
                            {group.img
                                ? <img alt={"home"} src={group.img}/>
                                : group.name.replaceAll(' ', '')}

                            <div className={cl.hint}>{group.name}</div>
                        </div>
                    </div>)
            }

            <div className={cl.elem}>
                <div className={classNames(cl.selector, cl.hide)}/>
                <div className={classNames(cl.imgWrapper, cl.special)}>
                    <Icon>add</Icon>
                </div>

                <div className={cl.hint}>Добавить сервер</div>
            </div>
            <div className={cl.elem}>
                <div className={classNames(cl.selector, cl.hide)}/>
                <div className={classNames(cl.imgWrapper, cl.special)}>
                    <Icon>explore</Icon>
                </div>

                <div className={cl.hint}>Исследуйте публичные серверы</div>
            </div>
            <hr/>
            <div className={cl.elem}>
                <div className={classNames(cl.selector, cl.hide)}/>
                <div className={classNames(cl.imgWrapper, cl.special)}>
                    <Icon>download</Icon>
                </div>

                <div className={cl.hint}>Загрузить приложения</div>
            </div>
        </aside>
    );
};

export default Sidebar1;