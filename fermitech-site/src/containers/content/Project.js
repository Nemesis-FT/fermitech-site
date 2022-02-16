import React, {useEffect, useState} from "react";
import Style from "./Panel.module.css";
import {Chapter, Panel, Anchor} from "@steffo/bluelib-react";
import {useTranslation, Trans} from 'react-i18next';

export default function Project(props) {
    const {t} = useTranslation();

    return (

        <Panel>
            <Panel>
                <Anchor href={props.project.link}>
                    {props.project.repo.toLowerCase()}
                </Anchor>
            </Panel>
            <p>{props.project.description}</p>

        </Panel>
    );
}