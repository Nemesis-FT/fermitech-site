import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    footer: {
                        line1: "Personal site created by Lorenzo Balugani.",
                        line2: "This website uses",
                        line3: "developed by Steffo."
                    },
                    descriptions: {
                        line1: '"Modern problems require software solutions"',
                        blob1: "I'm Lorenzo Balugani, a Computer Scientist and Open-Source developer, also known as Nemesis or Balu.",
                        blob2: "I mainly develop web applications, usually aimed at helping my peers at reaching their objectives, using the Gestione framework.",
                        blob3: "I've graduated from UniMore (University of Modena and Reggio Emilia) on october 2021 with the thesis \"BrumonApp: bringing the car disposal industry to the Web 2.0\". I'm currently pursuing a second-level degree in Computer Science at UniBo (University of Bologna)."
                    },
                    title: {
                        line1: "Fermitech Softworks"
                    },
                    not_found:{
                        message1: "You're lost, aren't you?",
                        message2: "Here, let me help you get back on track...",
                        message3: "Click here to return home",
                    },
                    content:{
                        lot_more: "And more!",
                        get_in_touch: "If you want to get in touch, you can do so using the methods below.",
                        faqs:{
                            one:{
                                q: "Why the name \"Fermitech Softworks\"? What is this all about?",
                                a: "I first used the name inside the Condivisione software, for no real reason at all. It was my thesis work for my technical diploma at ITIS Enrico Fermi, and I wanted to make it sound professional. After that, it sort of just stuck around as a meme, but some folks took it as something real, and so I just roll with it."
                            },
                            two:{
                                q: "What's this \"Gestione Framework\" thing?",
                                a: "It started out as an inside joke between me and my teachers back at ITIS Enrico Fermi. Gestione was a software I had developed that was installed on my assigned VM in the IT lab, and it was used to deliver exercises and keep track of my classmates quotes. \"Based upon Gestione\" basically means that sortof uses that same set of technology. It's a library of sorts that adds many fancy thingamajigs that a microframework such as Flask does not come with."
                            }
                        }
                    }
                }
            },
            it: {
                translation: {
                    footer: {
                        line1: "Sito personale creato da Lorenzo Balugani.",
                        line2: "Questo sito usa",
                        line3: "sviluppato da Steffo."
                    },
                    descriptions: {
                        line1: '"Problemi moderni necessitano di soluzioni software."',
                        blob: "In questo luogo puoi esplorare i miei lavori come sviluppatore di software open-source, e contattarmi se necessario."
                    },
                    title: {
                        line1: "Fermitech Softworks"
                    }
                }
            },
            spamtron:{
                translation: {
                    footer: {
                        line1: "Personal [hyperlink-powered interface] created by Lorenzo Balugani.",
                        line2: "This [shitpost] uses",
                        line3: "developed by [Big Shot Steffo]."
                    },
                    descriptions: {
                        line1: '"Modern problems require [Big Shot] solutions"',
                        blob1: "I'm Balugani L. Balugani, a [Microwave with grill functionality]  and Open-Source [Devil], also known as [Mastrota] or [Information Point].",
                        blob2: "I mainly develop [laughing coyotes], usually aimed at helping my at [becoming Big Shots], using the Gestione [weapon].",
                        blob3: "I've graduated from [9.99$/month excluding VAT] (University of [Big Shots] and [Mike]) on october 2021 with the thesis \"[Nightmare goggles: when worn, everything looks the same.]\". I'm currently pursuing a second-level degree in [Stonks] at [Hell] (University of [Hell])."
                    },
                    title: {
                        line1: "Fermi[For 4.99€/mo] Soft[Broken]"
                    },
                    not_found:{
                        message1: "You're lost, aren't you?",
                        message2: "Here, let me help you get [PIPIS]",
                        message3: "Click here to [provide Kromer]",
                    },
                    content:{
                        lot_more: "And more [for just 1.99$/year]!",
                        get_in_touch: "If you want to [burst into happiness], you can do so using [the automated payment via phone].",
                        faqs:{
                            one:{
                                q: "Why the name \"Fermitech Softworks\"? What is this all about?",
                                a: "I first used the name inside the Condivisione software, for no real reason at all. It was my thesis work for my technical diploma at ITIS Enrico Fermi, and I wanted to make it sound professional. After that, it sort of just stuck around as a meme, but some folks took it as something real, and so I just roll with it."
                            },
                            two:{
                                q: "What's this \"Gestione Framework\" thing?",
                                a: "It started out as an inside joke between me and my teachers back at ITIS Enrico Fermi. Gestione was a software I had developed that was installed on my assigned VM in the IT lab, and it was used to deliver exercises and keep track of my classmates quotes. \"Based upon Gestione\" basically means that sortof uses that same set of technology. It's a library of sorts that adds many fancy thingamajigs that a microframework such as Flask does not come with."
                            }
                        }
                    }
                }
            }
        }
    });

export default i18n;