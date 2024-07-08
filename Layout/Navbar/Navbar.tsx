"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import { CodeFileIcon, HomeIcon, SkillsIcon } from "@/assets";

import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const routes = [
    { path: "/", label: "home", icon: <HomeIcon /> },
    { path: "/skills", label: "skills", icon: <SkillsIcon /> },
    { path: "/works", label: "works", icon: <CodeFileIcon /> },
];

const Navbar = () => {
    const { t } = useTranslation();
    const currentRoute = usePathname();

    return (
        <div className={styles.navbar}>
            {routes.map((route) => (
                <Link href={route.path} key={route.label} passHref>
                    <div
                        className={cn(styles.cube, {
                            [styles.active]: route.path === currentRoute,
                        })}
                    >
                        <div className={cn(styles.side, styles.front)}>
                            {route.icon}
                        </div>
                        <div className={cn(styles.side, styles.back)}>
                            <span>{t(route.label)}</span>
                        </div>
                        <div className={cn(styles.side, styles.left)}></div>
                        <div className={cn(styles.side, styles.right)}></div>
                        <div className={cn(styles.side, styles.top)}></div>
                        <div className={cn(styles.side, styles.bottom)}></div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
