import React, {useState} from "react";
import { useTranslation, Trans } from 'react-i18next';
import Projects from "./content/Projects";
import Info from "./content/Info"
import Style from "./Home.module.css"
import Contact from "./content/Contact";
import Faqs from "./content/Faqs";


export default function Pager(props) {
    const { t } = useTranslation();
    return (
        <div>
            {props.status === "me" &&(
                <Info mode={props.mode}/>
            )}
            {props.status === "projects" &&(
                <Projects mode={props.mode}/>
            )}
            {props.status === "contact" &&(
                <Contact mode={props.mode}/>
            )}
            {props.status === "faqs" &&(
                <Faqs/>
            )}
        </div>
    );
}