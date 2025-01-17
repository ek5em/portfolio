"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import {
    JestIcon,
    NextIcon,
    ReactIcon,
    ReduxIcon,
    SassIcon,
    TSIcon,
} from "@/assets";
import { withLayout } from "@/Layout/Layout";
import Rating from "../Rating/Rating";

import styles from "./SkillsCube.module.scss";

const rotateSpeed = 0.6;

const SkillsCube = () => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [rotateZ, setRotateZ] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setRotateX((prevX) => (prevX + rotateSpeed) % 360);
                setRotateY((prevY) => (prevY + rotateSpeed) % 360);
                setRotateZ((prevZ) => (prevZ + rotateSpeed) % 360);
            }
        }, 16);

        return () => {
            clearInterval(interval);
        };
    }, [isHovered]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={styles.wrap}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={cn(styles.rotating_cube)}
                style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
                }}
            >
                <div className={cn(styles.side, styles.back)} />
                <div className={cn(styles.side, styles.front)} />
                <div className={cn(styles.side, styles.left)} />
                <div className={cn(styles.side, styles.right)} />
                <div className={cn(styles.side, styles.top)} />
                <div className={cn(styles.side, styles.bottom)} />
            </div>
            <div
                className={cn(styles.content, styles.rotating_cube, {
                    [styles.opened]: isHovered,
                })}
                style={{
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
                }}
            >
                <div className={cn(styles.side, styles.back)}>
                    <NextIcon />
                    <p>Next.js</p>
                    <Rating rate={4} isOpen={isHovered} />
                </div>
                <div className={cn(styles.side, styles.front)}>
                    <ReduxIcon />
                    <p>Redux</p>
                    <Rating rate={4} isOpen={isHovered} />
                </div>
                <div className={cn(styles.side, styles.left)}>
                    <JestIcon />
                    <p>Jest</p>
                    <Rating rate={5} isOpen={isHovered} />
                </div>
                <div className={cn(styles.side, styles.right)}>
                    <TSIcon />
                    <p>TypeScript</p>
                    <Rating rate={5} isOpen={isHovered} />
                </div>

                <div className={cn(styles.side, styles.top)}>
                    <ReactIcon />
                    <p>React</p>
                    <Rating rate={5} isOpen={isHovered} />
                </div>
                <div className={cn(styles.side, styles.bottom)}>
                    <SassIcon />
                    <p>Sass</p>
                    <Rating rate={5} isOpen={isHovered} />
                </div>
            </div>
        </div>
    );
};

export default withLayout(SkillsCube);
