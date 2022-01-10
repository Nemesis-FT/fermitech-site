import React, {useState} from "react";
import {useTranslation, Trans} from 'react-i18next';
import {Chapter, Panel} from "@steffo/bluelib-react";
import Style from "./Panel.module.css";
import {Details} from "@steffo/bluelib-react";

export default function Faqs() {
    const {t} = useTranslation();
    return (
        <Panel className={Style.PanelFixLeft}>
            <Details>
                <Details.Summary>
                    <Trans i18nKey={"content.faqs.one.q"}/>
                </Details.Summary>
                <Details.Content>
                    <Trans i18nKey={"content.faqs.one.a"}/>
                </Details.Content>
            </Details>
            <Details>
                <Details.Summary>
                    <Trans i18nKey={"content.faqs.two.q"}/>
                </Details.Summary>
                <Details.Content>
                    <Trans i18nKey={"content.faqs.two.a"}/>
                </Details.Content>
            </Details>
        </Panel>
    );
}