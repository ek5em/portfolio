"use client";
import React, { HTMLAttributes } from "react";
import Image from "next/image";
import { TProject } from "../CardDealer/Projects";
import { useTranslation } from "react-i18next";
import { GitHubIcon, LinkIcon } from "@/assets";
import styles from "./Card.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
    card: TProject;
}

export default function Card({ card, className, ...props }: Props) {
    const { t } = useTranslation();
    return (
        <div className={styles.card} {...props}>
            <div className={styles.inner}>
                <div className={styles.front}>
                    <Image
                        className={styles.image}
                        src={card.image}
                        alt={card.title}
                    />
                </div>
                <div className={styles.back}>
                    <h3 className={styles.title}>{card.title}</h3>
                    <p className={styles.description}>{t(card.aboutKeY)}</p>
                    <div className={styles.tags}>
                        {card.stack.map((el) => (
                            <div key={el} className={styles.tag}>
                                {el}
                            </div>
                        ))}
                    </div>
                    <div className={styles.links}>
                        {card.gitHub && (
                            <a href={card.gitHub} target="_blank">
                                <GitHubIcon />
                            </a>
                        )}
                        <a href={card.demo} target="_blank">
                            <LinkIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
