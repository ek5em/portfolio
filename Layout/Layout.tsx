import { FunctionComponent } from "react";
import LanguageChanger from "./LanguageChanger/LanguageChanger";
import Navbar from "./Navbar/Navbar";

import styles from "./Layout.module.scss";

export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>
) => {
    return (props: T): JSX.Element => {
        return (
            <div className={styles.wrapper}>
                <Navbar />
                <main>
                    <Component {...props} />
                </main>
                <div className={styles.language}>
                    <LanguageChanger />
                </div>
            </div>
        );
    };
};
