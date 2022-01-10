import React, {useEffect, useState} from "react";
import Style from "./Home.module.css";
import {Heading, Image, Panel} from "@steffo/bluelib-react";
import {useTranslation, Trans} from 'react-i18next';
import Ribbon from "./Ribbon";
import Pager from "./Pager";
import i18n from "i18next";

export default function Spam(props) {
    const {t} = useTranslation();
    const [status, setStatus] = useState(null);

    useEffect((e=>{
        i18n.changeLanguage("spamtron")
        props.setTheme("paper")
        document.body.style = 'background: white;';
    }), [status])

    useEffect((e=>{setStatus("me")}), [])

    return (
        <div className={Style.Home}>
            <div className={Style.lander}>
                <Heading level={1}> <Trans i18nKey={"title.line1"}/> </Heading>
                <p className="text-muted"><Trans i18nKey="descriptions.line1"></Trans></p>
            </div>

            <Ribbon setStatus={setStatus} status={status}/>
            <Pager status={status} mode={"spamtron"}/>
        </div>

    );
}