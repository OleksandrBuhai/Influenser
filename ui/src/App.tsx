import './App.css';
import { FC } from 'react';
import {mainComponents} from "@/Imports/mainImports.ts";


export const App: FC = () => {

    const componentsForRender = mainComponents.map((Component:FC, index) => (
        <Component key={index} />
    ))

    return (
        <>
            {componentsForRender}
        </>
    );
};
