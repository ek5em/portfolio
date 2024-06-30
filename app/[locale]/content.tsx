"use client";

import { useEffect, useState, useRef } from "react";
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
    sayHi = 3,
}

export default function Content() {
    const [activeSection, setActiveSection] = useState<EPage>(EPage.home);
    const [animateCard, setAnimateCard] = useState(false);
    const scrollRef = useRef(false);

    const handleScroll = () => {
        if (scrollRef.current) return;

        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition < windowHeight) {
            setActiveSection(EPage.home);
        } else if (scrollPosition < 2 * windowHeight) {
            setActiveSection(EPage.skills);
        } else if (scrollPosition < 3 * windowHeight) {
            setActiveSection(EPage.works);
        } else {
            setActiveSection(EPage.sayHi);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const windowHeight = window.innerHeight;
        scrollRef.current = true;

        switch (activeSection) {
            case EPage.home: {
                window.scrollTo({ top: 0 });
                break;
            }
            case EPage.skills: {
                window.scrollTo({ top: windowHeight });
                break;
            }
            case EPage.works: {
                window.scrollTo({ top: windowHeight * 2 });
                setAnimateCard(true);
                break;
            }
            case EPage.sayHi: {
                window.scrollTo({
                    top: windowHeight * 3,
                });
                break;
            }
        }

        localStorage.setItem("activeSection", activeSection.toString());

        setTimeout(() => {
            scrollRef.current = false;
        }, 250);
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
                <section
                    className={cn(styles.sayhi, {
                        [styles.active]: activeSection === EPage.sayHi,
                    })}
                >
                    FORM
                </section>
            </div>
            <div className={styles.language}>
                <LanguageChanger />
            </div>
        </>
    );
}
