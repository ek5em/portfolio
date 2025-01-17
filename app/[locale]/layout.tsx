import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import "@/styles/global.scss";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "ek5em's portfolio",
    description: "He's good enougth, don't you think so?",
};

export function generateStaticParams() {
    return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    return (
        <html lang={locale} dir={dir(locale)}>
            <body className={raleway.className}>{children}</body>
        </html>
    );
}
