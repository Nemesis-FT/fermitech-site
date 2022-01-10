import React, {useState, useEffect} from "react";
import Style from "./Panel.module.css";
import {Heading, Image, Panel, Chapter} from "@steffo/bluelib-react";
import {useTranslation, Trans} from 'react-i18next';
import Project from "./Project";
import {Oval} from "react-loader-spinner";

export default function Projects() {
    const {t} = useTranslation();
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        load()
    }, [t])


    async function load() {
        const response = await fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=lbindustries", {
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

    if(projects){
    return (
        <Chapter>
            {projects.map(project => <Project project={project}/>)}
        </Chapter>

    );}
    else{return(<div className={Style.LoaderCenter}>
        <Oval arialLabel="loading-indicator" color={"#e14619"} wrapperStyle={""}/>
    </div>)}
}