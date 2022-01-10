import React, {useState} from "react";
import { useTranslation, Trans } from 'react-i18next';
import Projects from "./content/Projects";
import Info from "./content/Info"
import Style from "./Home.module.css"


export default function Pager(props) {
    const { t } = useTranslation();
    return (
        <div>
            {props.status === "me" &&(
                <Info/>
            )}
            {props.status === "projects" &&(
                <Projects/>
            )}
            {props.status === "contact" &&(
                <div>CONTACT</div>
            )}
            {props.status === "faqs" &&(
                <div>FAQs</div>
            )}
        </div>
    );
}