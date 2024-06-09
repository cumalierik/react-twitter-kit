import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { mainMenu } from "~/utils/consts";
import More from "./more";
import New from "./new";



export default function Menü() {
    return (
        <nav className="mt-0.5 mb-1">
            {mainMenu.map((Menü, index) => (
                <div className="py-1 block group" key={index}>
                    <NavLink to={Menü.path}>
                        {({ isActive }) => (
                            <div
                                className={classNames("p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)] ", {
                                    "font-bold": isActive
                                })}
                            >
                                <div className="w-[26.25px] h-[26.25px] relative">
                                    {Menü?.notification && (
                                        <span className="w-[1.125rem] h-[1.125rem] rounded-full text-[color:var(--background-primary)] bg-[color:var(--color-primary)] text-white border border-[color:var(--background-primary)] absolute -top-1.5 -right-1 flex items-center justify-center text-[0.688rem]">
                                            {Menü.notification}
                                        </span>
                                    )}

                                    {!isActive && Menü.icon.passive}
                                    {isActive && Menü.icon.active}
                                </div>
                                <div className="pr-4 text-xl">{Menü.title}</div>
                            </div>
                        )}
                    </NavLink>
                </div>
            ))}

            <More />
            <New />
           
        </nav>
    );
}
