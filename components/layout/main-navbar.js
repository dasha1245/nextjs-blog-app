import Link from "next/link";

import Logo from "@/components/layout/logo";
import css from './main-navigation.module.css';

function MainNavbar() {
    return (
        <header className={css.header}>
            <Link href='/'>
                    <Logo/>
            </Link>
            <nav>
                <ul>
                    <li><Link href='/posts'>Posts</Link></li>
                    <li><Link href='/contacts'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar;