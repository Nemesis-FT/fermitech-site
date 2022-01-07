import React, {useEffect, useState} from "react";
import {Chapter, Button} from "@steffo/bluelib-react";
import {useTranslation, Trans} from 'react-i18next';
import Style from "./Ribbon.module.css";
import {faBook, faLaugh, faMailBulk, faProjectDiagram, faQuestion, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Ribbon(props) {
    const {t} = useTranslation();

    return (
        <div className={Style.chapter}>
            <Button onClick={e=>props.setStatus("me")}><FontAwesomeIcon icon={faUser}/></Button>
            <Button onClick={e=>props.setStatus("projects")}><FontAwesomeIcon icon={faProjectDiagram}/></Button>
            <Button onClick={e=>props.setStatus("contact")}><FontAwesomeIcon icon={faMailBulk}/></Button>
            <Button onClick={e=>props.setStatus("faqs")}><FontAwesomeIcon icon={faQuestion}/></Button>
        </div>
    );
}