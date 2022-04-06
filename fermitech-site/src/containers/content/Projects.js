import React, {useState, useEffect} from "react";
import Style from "./Panel.module.css";
import {Heading, Image, Panel, Chapter, Anchor} from "@steffo/bluelib-react";
import {useTranslation, Trans} from 'react-i18next';
import Project from "./Project";
import {Oval} from "react-loader-spinner";

export default function Projects(props) {
    const {t} = useTranslation();
    const [projects, setProjects] = useState([
        {repo: "Erre2.0", description:"A complete rework of Erre2, the easy-to-use summary manager, built on FastApi.", link:"https://github.com/Nemesis-FT/Erre2.0"},
        {repo: "Condivisione-Fermi", description: "Peer to peer lesson manager webapp, currently in use @ ITIS Enrico Fermi.", link: "https://github.com/Nemesis-FT/Condivisione-Fermi"},
        {repo: "Project-R", link:"https://github.com/Fermitech-Softworks/ProjectR",description:"A Django Webapp made for the Tecnologie Web exam @ UniMoRe"},
        {repo:"impressive-strawberry",link:"https://github.com/RYGhub/impressive-strawberry",description:"Achievements-as-a-service"},
        {repo:"Monitoraggio",link:"https://github.com/Nemesis-FT/Monitoraggio",description:"Flask webapp that tracks equipment logs written to be used on the CNR-ISAC lab on Monte Cimone."}
    ]);

    //useEffect(() => {
    //    load()
    //}, [t])


    async function load() {
        const response = await fetch("https://gh-pinned-repos.egoist.sh/?username=lbindustries", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            },
            mode: "no-cors"
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
                <Anchor href={"https://github.com/Nemesis-FT?tab=repositories"}><Trans i18nKey={"content.lot_more"}/></Anchor>
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