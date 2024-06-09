import Logo from "~/layouts/main/sidebar/logo";
import Menu from "~/layouts/main/sidebar/menü";
import Account from "./account";

export default function Sidebar() {
    return (
        <aside className="w-[275px] max-h-screen min-h-screen px-2 flex flex-col skictyz-[2] top-0">
            <Logo />
            <Menu />
            <Account />
        </aside>
    )
}