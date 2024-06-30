import { StarIcon } from "@/assets";
import cn from "classnames";
import styles from "./Rating.module.scss";

interface Props {
    rate: number;
    isOpen?: boolean;
}

export default function Rating({ rate, isOpen = true }: Props) {
    return (
        <div
            className={cn(styles.rating, {
                [styles.opened]: isOpen,
            })}
        >
            {Array.from({ length: 5 }).map((_, i) => {
                return (
                    <StarIcon
                        key={i}
                        className={cn(styles.star, {
                            [styles.filled]: i < rate,
                        })}
                        style={{ animationDelay: `${i * 0.2}s` }}
                    />
                );
            })}
        </div>
    );
}
