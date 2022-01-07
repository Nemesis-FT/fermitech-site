import React, {useState} from "react";
import Style from "./Home.module.css";
import {Heading, Image, Panel} from "@steffo/bluelib-react";
import { useTranslation, Trans } from 'react-i18next';
import Ribbon from "./Ribbon";
import Pager from "./Pager";

export default function Home() {
    const { t } = useTranslation();
    const [status, setStatus] = useState();
    return (
        <div className={Style.Home}>
            <div className={Style.lander}>
                <Heading level={1}> <Trans i18nKey={"title.line1"}/> </Heading>
                <p className="text-muted"><Trans i18nKey="descriptions.line1"></Trans></p>
            </div>
            <Panel className={Style.PanelFix}>
                <p><Trans i18nKey="descriptions.blob1"></Trans></p>
                <div className={Style.PanelFixLeft}>
                <p><Trans i18nKey="descriptions.blob2"></Trans> <Trans i18nKey="descriptions.blob3"></Trans></p>
                </div>
            </Panel>
            <Ribbon setStatus={setStatus} status={status}/>
            <Pager status={status}/>
        </div>

    );
}