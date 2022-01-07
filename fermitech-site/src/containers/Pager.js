import React, {useState} from "react";
import { useTranslation, Trans } from 'react-i18next';

export default function Pager(props) {
    const { t } = useTranslation();
    return (
        <div>
            {props.status === "me" &&(
                <div>ME</div>
            )}
            {props.status === "projects" &&(
                <div>PROJECTS</div>
            )}
            {props.status === "contact" &&(
                <div>CONTACT</div>
            )}
            {props.status === "faqs" &&(
                <div>FAQs</div>
            )}
        </div>
    );
}