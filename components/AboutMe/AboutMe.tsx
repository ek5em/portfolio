"use client";

import { useTranslation } from "react-i18next";
import { GitHubIcon, TelegramIcon } from "@/assets";

import styles from "./AboutMe.module.scss";

export default function AboutMe() {
    const { t } = useTranslation();
    return (
        <div className={styles.wrap}>
            <div className={styles.about}>
                <h1>
                    Font-End React <br />
                    {t("dev")} 🖐
                </h1>
                <p>{t("about")}</p>
            </div>
            <div className={styles.photo}>
                <a href="https://github.com/ek5em" target="_blank">
                    <GitHubIcon />
                </a>
                <a href="https://t.me/ek5em" target="_blank">
                    <TelegramIcon />
                </a>
            </div>
        </div>
    );
}
