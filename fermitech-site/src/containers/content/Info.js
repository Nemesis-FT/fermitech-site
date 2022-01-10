import React, {useState} from "react";
import {useTranslation, Trans} from 'react-i18next';
import {Chapter, Panel} from "@steffo/bluelib-react";
import Style from "./Panel.module.css";
import {Image} from "@steffo/bluelib-react";

export default function Info(props) {
    const {t} = useTranslation();
    return (
        <Chapter className={Style.PanelFixMiddle}>
            {props.mode !== "spamtron" && (
                <Image src={"me.jpg"} limit={"quarter"} alt="Image of Lorenzo Balugani"/>
            )}
            {props.mode === "spamtron" && (
                <Image src={"spam.jpg"} limit={"quarter"} alt="Image of Balugani L. Balugani"/>
            )}
            <Panel>
                <p><Trans i18nKey="descriptions.blob1"></Trans></p>
                <div>
                    <p><Trans i18nKey="descriptions.blob2"></Trans></p>
                    <p><Trans i18nKey="descriptions.blob3"></Trans></p>
                </div>
            </Panel>
        </Chapter>
    );
}