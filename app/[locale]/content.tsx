"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./page.module.scss";
import {
    AboutMe,
    SkillsCube,
    Navbar,
    LanguageChanger,
    CardDealer,
} from "@/components";

enum EPage {
    home = 0,
    skills = 1,
    works = 2,
}

const scrollPerSection = 0.5;

export default function Content() {
    const [activeSection, setActiveSection] = useState<EPage>(EPage.home);
    const [animateCard, setAnimateCard] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight * scrollPerSection;

        if (scrollPosition < windowHeight) {
            setActiveSection(EPage.home);
        } else if (scrollPosition < 2 * windowHeight) {
            setActiveSection(EPage.skills);
        } else if (scrollPosition < 3 * windowHeight) {
            setActiveSection(EPage.works);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const windowHeight = window.innerHeight * scrollPerSection;

        switch (activeSection) {
            case EPage.home: {
                window.scrollTo({ top: 0 });
                break;
            }
            case EPage.skills: {
                window.scrollTo({ top: windowHeight + 100 });
                break;
            }
            case EPage.works: {
                window.scrollTo({ top: windowHeight * 2 + 100 });
                setAnimateCard(true);
                break;
            }
        }
    }, [activeSection]);

    return (
        <>
            <Navbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <div className={styles.container}>
                <section
                    className={cn(styles.about, {
                        [styles.active]: activeSection === EPage.home,
                    })}
                >
                    <AboutMe />
                </section>
                <section
                    className={cn(styles.skills, {
                        [styles.active]: activeSection === EPage.skills,
                    })}
                >
                    <SkillsCube />
                </section>
                <section
                    className={cn(styles.projects, {
                        [styles.active]: activeSection === EPage.works,
                    })}
                >
                    {animateCard && <CardDealer />}
                </section>
            </div>
            <div className={styles.language}>
                <LanguageChanger />
            </div>
        </>
    );
}
