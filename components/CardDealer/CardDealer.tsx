import styles from "./CardDealer.module.scss";
import { Projects } from "./Projects";
import Card from "../Card/Card";
import { useCallback } from "react";

const cardWidth = 432;

export default function CardDealer() {
    const calculateTransform = useCallback((i: number) => {
        if (window.innerWidth > 880) {
            const cardPerRow = Math.min(
                Math.floor(window.innerWidth / cardWidth),
                3
            );

            const rowIndex = Math.floor(i / cardPerRow);
            const centerIndexInRow = Math.floor(cardPerRow / 2);
            const currentIndexInRow = i % cardPerRow;
            const lastRow = Math.floor(Projects.length - 1 / cardPerRow);

            const x = (centerIndexInRow - currentIndexInRow) * 100;
            const y = (lastRow - 1 - rowIndex) * 100;
            return `translateX(${x}%) translateY(${y}%)`;
        }
        return `translateX(0) translateY(0)`;
    }, []);

    return (
        <div className={styles.wrap}>
            <div className={styles.cardArea}>
                {Projects.map((project, index) => (
                    <div
                        key={project.aboutKeY}
                        className={styles.card}
                        style={{
                            animationDelay: `${index * 0.5}s`,
                            transform: calculateTransform(index),
                        }}
                    >
                        <Card card={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}
