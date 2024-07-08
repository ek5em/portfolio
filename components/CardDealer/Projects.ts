import { StaticImageData } from "next/image";
import ReduxTable from "@/assets/jpg/reduxTable.jpg";
import TopApp from "@/assets/jpg/top-app.jpg";
import Calculator from "@/assets/jpg/calculator.jpg";
import Bootstrap from "@/assets/jpg/bootstrap.jpg";
import LesDvor from "@/assets/jpg/lesdvor.jpg";
import Payment from "@/assets/jpg/payment.jpg";
import Taxi from "@/assets/jpg/taxi.jpg";

export type TProject = {
    title: string;
    gitHub?: string;
    demo: string;
    image: StaticImageData;
    aboutKeY: string;
    stack: string[];
};

export const Projects: TProject[] = [
    {
        aboutKeY: "aboutTopApp",
        demo: "https://my-top-app-two.vercel.app",
        gitHub: "https://github.com/ek5em/my-top-app/tree/main",
        image: TopApp,
        title: "Top Courses",
        stack: ["Next", "React", "Frame-motion"],
    },
    {
        aboutKeY: "aboutTaxi",
        demo: "https://taxiorder.vercel.app",
        gitHub: "https://github.com/ek5em/taxiorder",
        image: Taxi,
        title: "TaxiOrder",
        stack: ["Redux", "React", "YMaps"],
    },
    {
        aboutKeY: "aboutReduxTable",
        demo: "https://redux-table-one.vercel.app",
        gitHub: "https://github.com/ek5em/reduxTable",
        image: ReduxTable,
        title: "ReduxTable",
        stack: ["Redux", "React", "SCSS"],
    },
    {
        aboutKeY: "aboutPayment",
        demo: "https://bd-payment-app.vercel.app/",
        image: Payment,
        title: "PaymentApp",
        gitHub: "https://github.com/ek5em/brave-developers-test",
        stack: ["Next", "React", "Styled-components"],
    },
    {
        aboutKeY: "aboutCalculator",
        demo: "https://calculator-two-eta-46.vercel.app",
        gitHub: "https://github.com/ek5em/calculator",
        image: Calculator,
        title: "Canvas&Calculator",
        stack: ["React", "Canvas", "Math"],
    },
    {
        aboutKeY: "aboutLesDvor",
        demo: "https://lesdvor18.com",
        image: LesDvor,
        title: "LesDvor",
        stack: ["CRM", "Wordpress", "CSS"],
    },
    {
        aboutKeY: "aboutBootstrap",
        demo: "ek5em.github.io/webee/",
        gitHub: "https://github.com/ek5em/webee/tree/feature",
        image: Bootstrap,
        title: "Bootstrap",
        stack: ["Pure JS", "Bootstrap", "Maps API"],
    },
];
