"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import cn from "classnames";
import styles from "./LanguageChanger.module.scss";

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (newLocale: string) => {
        if (newLocale !== currentLocale) {
            const days = 30;
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            const expires = date.toUTCString();
            document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

            if (currentLocale === i18nConfig.defaultLocale) {
                router.push("/" + newLocale + currentPathname);
            } else {
                router.push(
                    currentPathname.replace(
                        `/${currentLocale}`,
                        `/${newLocale}`
                    )
                );
            }

            router.refresh();
        }
    };

    return (
        <div className={styles.switch}>
            <button
                className={cn({
                    [styles.active]: currentLocale === "ru",
                })}
                onClick={() => handleChange("ru")}
            >
                RU
            </button>
            <button
                className={cn({
                    [styles.active]: currentLocale === "en",
                })}
                onClick={() => handleChange("en")}
            >
                EN
            </button>
        </div>
    );
}
