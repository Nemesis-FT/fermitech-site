import React, {useState, useEffect} from "react";
import Style from "./Panel.module.css";
import {Heading, Image, Panel, Chapter, Anchor} from "@steffo/bluelib-react";
import {useTranslation, Trans} from 'react-i18next';
import Project from "./Project";
import {Oval} from "react-loader-spinner";

export default function Projects(props) {
    const {t} = useTranslation();
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        load()
    }, [t])


    async function load() {
        const response = await fetch("https://gh-pinned-repos.egoist.sh//?username=lbindustries", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': "*"
            },
        });
        if (response.status === 200) {
            let values = await response.json()
            console.debug(values)
            setProjects(values)
        }
    }

    if (projects) {
        return (
            <div>
                <Chapter>
                    {projects.map(project => <Project project={project}/>)}
                </Chapter>
                <Anchor href={"https://github.com/LBindustries?tab=repositories"}><Trans i18nKey={"content.lot_more"}/></Anchor>
            </div>
        );
    } else {
        return (<div className={Style.LoaderCenter}>
            {props.mode !== "spamtron" && (
            <Oval arialLabel="loading-indicator" color={"#e14619"}/>)}
            {props.mode === "spamtron" && (
                <Oval arialLabel="loading-indicator" color={"#000000"}/>)}
        </div>)
    }
}