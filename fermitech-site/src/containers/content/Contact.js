import React, {useState} from "react";
import {useTranslation, Trans} from 'react-i18next';
import {Chapter, Panel} from "@steffo/bluelib-react";
import Style from "./Panel.module.css";
import {Anchor} from "@steffo/bluelib-react";
import {faAt, faCodeBranch, faCoffee, faSuitcase} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Contact(props) {
    const {t} = useTranslation();
    return (
        <div>
            <Panel>
                <Trans i18nKey={"content.get_in_touch"}/>
            </Panel>
            <Chapter className={Style.PanelFix}>
                {props.mode !== "spamtron" && (
                    <Panel><Anchor href={"mailto:lorenzo.balugani@gmail.com"} customColor={"#E0C097"}><FontAwesomeIcon icon={faAt}/> Email</Anchor></Panel>
                )}
                {props.mode === "spamtron" && (
                    <Panel><Anchor href={"mailto:lorenzo.balugani@gmail.com"}><FontAwesomeIcon icon={faAt}/> Email</Anchor></Panel>
                )}
                <Panel><Anchor href={"https://github.com/Nemesis-FT"}><FontAwesomeIcon icon={faCodeBranch}/> Github (Lorenzo)</Anchor></Panel>
                <Panel><Anchor href={"https://github.com/Fermitech-Softworks"}><FontAwesomeIcon icon={faCodeBranch}/> Github (Fermitech)</Anchor></Panel>
                <Panel><Anchor href={"https://www.linkedin.com/in/lorenzo-balugani-1164471b7/"}><FontAwesomeIcon icon={faSuitcase}/> Linkedin</Anchor></Panel>
                <Panel><Anchor href={"https://ko-fi.com/evilbalu"}><FontAwesomeIcon icon={faCoffee}/> Ko-Fi</Anchor></Panel>
            </Chapter>
        </div>
    );
}