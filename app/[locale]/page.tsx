import { TranslationsProvider } from "@/components";
import initTranslations from "../i18n";
import Content from "./content";

const i18nNamespaces = ["common"];

export default async function Home({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const { resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
        >
            <Content />
        </TranslationsProvider>
    );
}
