"use client";

import cn from "classnames";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";
import { CodeFileIcon, HomeIcon, SkillsIcon } from "@/assets";

interface NavbarProps {
    activeSection: number;
    setActiveSection: (section: number) => void;
}

const icons = [
    <HomeIcon key={0} />,
    <SkillsIcon key={1} />,
    <CodeFileIcon key={2} />,
];

export default function Navigation({
    activeSection,
    setActiveSection,
}: NavbarProps) {
    const { t } = useTranslation();
    return (
        <div className={styles.navbar}>
            {["home", "skills", "works"].map((label, i) => (
                <div
                    className={cn(styles.cube, {
                        [styles.active]: i === activeSection,
                    })}
                    key={label}
                    onClick={() => setActiveSection(i)}
                >
                    <div className={cn(styles.side, styles.front)}>
                        {icons[i]}
                    </div>
                    <div className={cn(styles.side, styles.back)}>
                        <span>{t(label)}</span>
                    </div>
                    <div className={cn(styles.side, styles.left)}></div>
                    <div className={cn(styles.side, styles.right)}></div>
                    <div className={cn(styles.side, styles.top)}></div>
                    <div className={cn(styles.side, styles.bottom)}></div>
                </div>
            ))}
        </div>
    );
}
