import { StaticImageData } from "next/image";
import ReduxTable from "@/assets/jpg/reduxTable.jpg";
import TopApp from "@/assets/jpg/top-app.jpg";
import Calculator from "@/assets/jpg/calculator.jpg";

export type TProject = {
    title: string;
    gitHub: string;
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
        aboutKeY: "aboutCalculator",
        demo: "https://calculator-two-eta-46.vercel.app",
        gitHub: "https://github.com/ek5em/calculator",
        image: Calculator,
        title: "Canvas&Calculator",
        stack: ["React", "Canvas", "Math"],
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
        aboutKeY: "aboutReduxTable",
        demo: "https://redux-table-one.vercel.app",
        gitHub: "https://github.com/ek5em/reduxTable",
        image: ReduxTable,
        title: "ReduxTable",
        stack: ["Redux", "React", "SCSS"],
    },
];
